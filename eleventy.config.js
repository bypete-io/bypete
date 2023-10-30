// const fs = require('fs');
const { DateTime } = require('luxon');
const markdownItAnchor = require('markdown-it-anchor');
const markdownIt = require('markdown-it');
const markdownItToc = require('markdown-it-toc-done-right');
const markdownItAttrs = require('markdown-it-attrs');

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginBundle = require('@11ty/eleventy-plugin-bundle');
const pluginNavigation = require('@11ty/eleventy-navigation');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

const { minify } = require('terser');
const CleanCSS = require('clean-css');
const htmlmin = require('html-minifier-terser');
const beautifyhtml = require('js-beautify').html;

const pluginDrafts = require('./eleventy.config.drafts.js');
const pluginImages = require('./eleventy.config.images.js');

module.exports = function (eleventyConfig) {
    // Copy the contents of the `public` folder to the output folder
    // For example, `./public/css/` ends up in `_site/css/`
    eleventyConfig.addPassthroughCopy({
        './public/': '/',

        './node_modules/prismjs/themes/prism-okaidia.min.css':
            '/assets/css/prism-okaidia.min.css',

        './node_modules/photoswipe/dist': './assets/photoswipe',

        './node_modules/@fortawesome/fontawesome-free/css/all.min.css':
            './assets/fontawesome/css/all.min.css',

        './node_modules/@fortawesome/fontawesome-free/webfonts':
            './assets/fontawesome/webfonts',
    });
    // Required?
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_seperator: '<!-- excerpt -->',
    });
    // Required?
    eleventyConfig.setDataDeepMerge(true);

    // Add Shortcodes
    let _CAPTURES;
    eleventyConfig.on('beforeBuild', () => {
        // I need this to wipe _CAPTURES when editing pages, wouldn't be an issue in prod
        _CAPTURES = {};
    });

    eleventyConfig.addPairedShortcode('mycapture', function (content, name) {
        if (!_CAPTURES[this.page.inputPath])
            _CAPTURES[this.page.inputPath] = {};
        if (!_CAPTURES[this.page.inputPath][name])
            _CAPTURES[this.page.inputPath][name] = '';
        _CAPTURES[this.page.inputPath][name] += content;
        return '';
    });

    eleventyConfig.addPairedShortcode(
        'hero',
        async function (content, options = {}) {
            const {
                data = '',
                overflow = '',
                legibility = 'text-white',
                wrapper = 'bg-white min-h-photo md:min-h-33vw xl:min-h-block pt-[var(--smheaderheight)] md:pt-[var(--headerheight)]',
            } = options;
            const contained = `${overflow ? 'overflow-hidden' : ''}`;
            return `<div id="hero" class="w-full relative outline-none ${wrapper} ${contained} ${legibility} ${data.bg}"  x-data="{ shown: false }"
    x-intersect.threshold.25="shown = true">
          ${content}
        </div>`;
        },
    );

    // Blocks

    eleventyConfig.addPairedShortcode(
        'blocktype',
        async function (content, options = {}) {
            const {
                data = '',
                overflow = '',
                legibility = '',
                breakout = '',
                wrapper = 'bg-white min-h-photo md:min-h-33vw xl:min-h-block',
            } = options;
            const contained = `${overflow ? 'overflow-hidden' : ''}`;
            const breakoutClass = breakout
                ? 'w-screen max-w-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
                : '';
            return `<div class="not-prose w-full relative outline-none ${wrapper} ${contained} ${breakoutClass} ${legibility} ${data.bg}"  x-data="{ shown: false }"
  x-intersect.threshold.25="shown = true">
        ${content}
      </div>`;
        },
    );

    eleventyConfig.addShortcode('displaycapture', function (name) {
        if (
            _CAPTURES[this.page.inputPath] &&
            _CAPTURES[this.page.inputPath][name]
        )
            return _CAPTURES[this.page.inputPath][name];
        return '';
    });

    eleventyConfig.addShortcode('version', function () {
        // return now
        var pjson = require('./package.json');
        return pjson.version;
    });

    eleventyConfig.addShortcode('lastupdated', function () {
        var day = new Date().getDate();
        var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        var month = months[new Date().getMonth()];
        var year = new Date().getFullYear();

        return day + ' ' + month + ' ' + year;
    });

    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

    // Run Eleventy when these files change:
    // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

    // Watch content images for the image pipeline.
    eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg}');
    // eleventyConfig.addWatchTarget('./src/css/tailwind.css');
    // eleventyConfig.addWatchTarget('_bundle/**/*.{css,js,pcss}');

    // App plugins
    eleventyConfig.addPlugin(pluginDrafts);
    eleventyConfig.addPlugin(pluginImages);

    // Official plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: { tabindex: 0 },
    });
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(pluginBundle);

    // Filters

    eleventyConfig.addFilter('debugger', (...args) => {
        console.log(...args);
        debugger;
    });

    // https://github.com/11ty/eleventy/discussions/2312
    eleventyConfig.addFilter(
        'excludeByFrontMatter',
        function (collection = [], frontMatterItem = '') {
            if (!frontMatterItem) {
                return collection;
            }
            return collection.filter((item) => !item.data[frontMatterItem]);
        },
    );

    // https://www.11ty.dev/docs/quicktips/inline-js/
    eleventyConfig.addNunjucksAsyncFilter(
        'jsmin',
        async function (code, callback) {
            try {
                const minified = await minify(code);
                callback(null, minified.code);
            } catch (err) {
                console.error('Terser error: ', err);
                // Fail gracefully.
                callback(null, code);
            }
        },
    );

    eleventyConfig.addFilter('cssmin', function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
        // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
        return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(
            format || 'dd LLLL yyyy',
        );
    });

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'yyyy-LL-dd',
        );
    });

    eleventyConfig.addFilter('simpleDay', (dateObj) => {
        var dt = DateTime.fromJSDate(dateObj, { zone: 'utc' });
        return dt.day;
    });

    eleventyConfig.addFilter('simpleMonth', (dateObj) => {
        var dt = DateTime.fromJSDate(dateObj, { zone: 'utc' });
        return dt.monthShort;
    });

    eleventyConfig.addFilter('simpleYear', (dateObj) => {
        var dt = DateTime.fromJSDate(dateObj, { zone: 'utc' });
        return dt.year;
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter('head', (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    // Return the smallest number argument
    eleventyConfig.addFilter('min', (...numbers) => {
        return Math.min.apply(null, numbers);
    });

    // Return all the tags used in a collection
    eleventyConfig.addFilter('getAllTags', (collection) => {
        let tagSet = new Set();
        for (let item of collection) {
            (item.data.tags || []).forEach((tag) => tagSet.add(tag));
        }
        return Array.from(tagSet);
    });

    eleventyConfig.addFilter('filterTagList', function filterTagList(tags) {
        return (tags || []).filter(
            (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1,
        );
    });

    // Collections

    // Automatically import macros on every page
    // (otherwise we need to manually include on each page that uses them)
    // https://github.com/11ty/eleventy/issues/613#issuecomment-968189433
    eleventyConfig.addCollection('everything', (collectionApi) => {
        // Note: Update the path to point to your macro file
        const macroImport = `{% import "macros/components.njk" as macro with context %}`;
        // Note: Update the pattern below to include all files that need macros imported
        // Note: Collections don’t include layouts or includes, which still require importing macros manually
        let collection = collectionApi.getFilteredByGlob(
            'content/**/*.{html,njk,md}',
        );
        collection.forEach((item) => {
            item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`;
        });
        return collection;
    });

    // Customize Markdown library settings:
    eleventyConfig.amendLibrary('md', (mdLib) => {
        mdLib
            .use(markdownItAnchor, {
                // permalink: markdownItAnchor.permalink.ariaHidden({
                //   placement: "after",
                //   class: "header-anchor",
                //   symbol: "#",
                //   ariaHidden: false,
                // }),
                permalink: markdownItAnchor.permalink.linkAfterHeader({
                    style: 'visually-hidden',
                    symbol: '<i class="fa-solid fa-link"></i>',
                    class: 'opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100  absolute right-0 md:right-auto md:left-0 top-1/2 -translate-y-1/2 ',
                    assistiveText: (title) => `Permalink to “${title}”`,
                    visuallyHiddenClass: 'sr-only',
                    wrapper: [
                        '<div class="relative group -ml-6 pl-6 permalink-first:mt-0">',
                        '</div>',
                    ],
                }),
                level: [1, 2, 3, 4],
                slugify: eleventyConfig.getFilter('slugify'),
            })
            .use(markdownItToc, {
                listClass: 'mb-0',
            })
            .use(markdownItAttrs, {});
    });

    eleventyConfig.setNunjucksEnvironmentOptions({
        trimBlocks: true,
        lstripBlocks: true,
    });

    // Transforms
    eleventyConfig.addTransform('beautifyhtml', function (content) {
        const options = {
            indent_size: '2',
            html: {
                indent_char: ' ',
                max_preserve_newlines: '-1',
                preserve_newlines: false,
                indent_scripts: 'normal',
                end_with_newline: false,
                wrap_line_length: '80',
                indent_empty_lines: false,
                wrap_attributes: 'auto',
                js: {
                    indent_size: 2,
                },
                css: {
                    indent_size: 2,
                },
            },
        };
        if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
            if (process.env.NODE_ENV === 'development') {
                options.indent_size = 2;
            }
            const minified = beautifyhtml(content, options);
            return minified;
        }

        return content;
    });

    // Features to make your build faster (when you need them)

    // If your passthrough copy gets heavy and cumbersome, add this line
    // to emulate the file copy on the dev server. Learn more:
    // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

    // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: ['md', 'njk', 'html', 'liquid'],

        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'njk',

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'njk',

        // These are all optional:
        dir: {
            input: 'content', // default: "."
            includes: '../_includes', // default: "_includes"
            data: '../_data', // default: "_data"
            output: '_site',
        },

        // -----------------------------------------------------------------
        // Optional items:
        // -----------------------------------------------------------------

        // If your site deploys to a subdirectory, change `pathPrefix`.
        // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

        // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
        // it will transform any absolute URLs in your HTML to include this
        // folder name and does **not** affect where things go in the output folder.
        pathPrefix: '/',
    };
};
