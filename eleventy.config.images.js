const path = require('path');
const Image = require('@11ty/eleventy-img');

module.exports = (eleventyConfig) => {
    function relativeToInputPath(inputPath, relativeFilePath) {
        const split = inputPath.split('/');
        split.pop();
        return path.resolve(split.join(path.sep), relativeFilePath);
    }

    function customHTML(
        metadata,
        imageAttributes,
        detailMetadata,
        detailMedia,
    ) {
        const { ratio } = imageAttributes;
        const imgClass = ratio
            ? 'w-full h-full absolute inset-0 object-cover'
            : '';
        // use the lower resolution width, height and url for the img
        const lowsrc = metadata.jpeg[0];

        const detailOutput = detailMetadata
            ? Object.values(detailMetadata)
                  .map(
                      (imageFormat) =>
                          `
<source type="${imageFormat[0].sourceType}" srcset="${imageFormat
                              .map((entry) => entry.srcset)
                              .join(
                                  ', ',
                              )}" media="${detailMedia}" sizes="100vw" >`,
                  )
                  .join('\n')
            : '';

        const sourceOutput =
            detailOutput +
            Object.values(metadata)
                .map(
                    (imageFormat) =>
                        `
<source type="${imageFormat[0].sourceType}" srcset="${imageFormat
                            .map((entry) => entry.srcset)
                            .join(', ')}" sizes="${imageAttributes.sizes}">`,
                )
                .join('\n');

        let picture = `
<picture>
${sourceOutput}
  <img
    src="${lowsrc.url}"
    width="${lowsrc.width}"
    height="${lowsrc.height}"
    alt="${imageAttributes.alt}"
    class="${imageAttributes.classlist} ${imgClass}"
    loading="${imageAttributes.loading}"
    decoding="async">
</picture>`;

        const credit = `
<div class="credit opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  x-data="credit">
  <button class="credit__icon "
  @click="toggle"
  :aria-expanded="open ? 'true' : 'false'">
  <i class="fa-regular fa-image" aria-hidden="true"></i>
  <span class="sr-only">Show image credit</span>
  </button>
  <div class="credit__text" x-cloak x-transition x-show="open">Credit: ${imageAttributes.credit}</div>
</div>`;

        if (imageAttributes.credit) {
            picture = `${picture}${credit}`;
        }

        return picture;
    }

    // Eleventy Image shortcode https://www.11ty.dev/docs/plugins/image/
    eleventyConfig.addShortcode('image', async function (options = {}) {
        const {
            src = '',
            detailSrc = '',
            detailMedia = '',
            alt = '',
            credit = '',
            widths = [640, 1200],
            sizes = '(max-width: 30em) 100vw, 100vw',
            caption = '',
            classlist = '',
            wrapper = '',
            ratio = '',
            breakout = false,
            loading = 'lazy', // lazy or eager
        } = options;

        const isAbsolutePath = src.startsWith('/');
        const file = isAbsolutePath
            ? `public/img${src}`
            : relativeToInputPath(this.page.inputPath, src);

        const isDetailAbsolutePath = detailSrc.startsWith('/');
        const detailfile = isDetailAbsolutePath
            ? `public/img${detailSrc}`
            : relativeToInputPath(this.page.inputPath, detailSrc);

        const metadata = await Image(file, {
            widths: detailSrc ? widths.slice(1) : widths,
            formats: ['avif', 'webp', 'jpeg'],
            outputDir: path.join(eleventyConfig.dir.output, 'img'), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
            sharpWebpOptions: { quality: 90 },
            sharpAvifOptions: { quality: 90 },
        });

        const detailMetadata =
            detailSrc && detailMedia
                ? await Image(detailfile, {
                      widths: [widths[0]], // use first width only
                      formats: ['avif', 'webp'],
                      outputDir: path.join(eleventyConfig.dir.output, 'img'), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
                      sharpWebpOptions: { quality: 90 },
                      sharpAvifOptions: { quality: 90 },
                  })
                : null;

        const imageAttributes = {
            alt,
            credit,
            sizes,
            caption,
            classlist,
            wrapper,
            ratio,
            breakout,
            loading,
            decoding: 'async',
        };

        const pictureOutput = customHTML(
            metadata,
            imageAttributes,
            detailMetadata,
            detailMedia,
        );

        const breakoutClass = breakout
            ? 'relative w-screen max-w-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
            : '';
        const captionClass = breakout ? 'px-4 md:px-8' : 'px-3 md:px-0';
        const creditClass = credit ? 'relative group' : '';
        const ratioClass = ratio || '';
        let wrap;

        if (caption) {
            wrap = `<figure class=" not-prose ${breakoutClass} ${wrapper}">
            <div class="${creditClass} ${ratioClass}">${pictureOutput}</div>
            <figcaption class="border-b border-gray-200 pb-4 mt-4 text-sm flex items-center justify-start ${captionClass}">${caption}</figcaption>
        </figure>
    `;
        } else {
            wrap = breakout
                ? `<div class="not-prose ${breakoutClass} ${wrapper}">
                <div class="${creditClass} ${ratioClass}">${pictureOutput}</div>
                </div>
                `
                : `${
                      credit || ratio || wrapper
                          ? `<div class="not-prose ${wrapper} ${creditClass} ${ratioClass}">`
                          : ''
                  }${pictureOutput}${credit || ratio || wrapper ? `</div>` : ''}
                  `;
        }
        return wrap;
    });

    function lightboxHTML(metadata, imageAttributes) {
        // use the lower resolution width, height and url for the img
        const lowJpeg = metadata.jpeg[0];
        const highJpeg = metadata.jpeg[metadata.jpeg.length - 1];

        const lowWebp = metadata.webp[0];
        const highWebp = metadata.webp[metadata.webp.length - 1];

        let img = `<img src="${lowJpeg.url}" 
        srcset="${lowWebp.srcset}"
        class="${imageAttributes.classlist}"
        width="${lowJpeg.width}"
        sizes="${imageAttributes.sizes}"
        height="${lowJpeg.height}"
        alt="${imageAttributes.alt}"
        loading="lazy" decoding="async">`;

        if (imageAttributes.caption) {
            img = `${img}
<span class="hidden hidden-caption-content">${imageAttributes.caption}</span>`;
        }

        // create the image element
        return `<a href="${highJpeg.url}" 
  data-lightbox 
  class="${imageAttributes.wrapper}"
  data-pswp-width="${highWebp.width}"
  data-pswp-height="${highWebp.height}"
  data-pswp-srcset="${highWebp.url}"
  target="_blank"
  ${imageAttributes.cropped ? `data-cropped="true"` : ''}>
  ${img}
</a>`;
    }

    // Eleventy Image shortcode https://www.11ty.dev/docs/plugins/image/
    eleventyConfig.addShortcode('lightbox', async function (options = {}) {
        const {
            src = '',
            alt = '',
            credit = '',
            widths = [480, 1920, 'auto'],
            sizes = '(max-width: 30em) 100vw, 100vw',
            caption = '',
            classlist = 'absolute inset-0 w-full h-full object-cover object-top',
            cropped = false,
            wrapper = 'block h-full w-full shadow-sm rounded hover:cursor-pointer relative overflow-hidden',
            ratio = '',
            breakout = false,
            loading = 'lazy', // lazy or eager
        } = options;

        const isAbsolutePath = src.startsWith('/');
        const file = isAbsolutePath
            ? `public/img${src}`
            : relativeToInputPath(this.page.inputPath, src);

        const metadata = await Image(file, {
            widths,
            formats: ['webp', 'jpeg'],
            urlPath: '/img/lightbox/',
            outputDir: path.join(eleventyConfig.dir.output, 'img/lightbox'), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
            sharpWebpOptions: { quality: 95 },
            sharpAvifOptions: { quality: 95 },
        });

        const imageAttributes = {
            alt,
            credit,
            sizes,
            caption,
            classlist,
            cropped,
            wrapper,
            ratio,
            breakout,
            loading,
            decoding: 'async',
        };

        const pictureOutput = lightboxHTML(metadata, imageAttributes);

        return pictureOutput;
    });
};
