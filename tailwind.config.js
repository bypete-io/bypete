const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './{_bundle,_data,_includes,content}/**/*.{html,js,json,njk,md}',
        './eleventy.config.js',
    ],
    safelist: [
        {
            pattern: /block(33|40|50|60|66)/,
            variants: ['md', 'lg', 'xl'],
        },
        {
            pattern:
                /(label-pin--|label--)(enabled|in|refunded|info|fin|refundpending|refunded|auth|out|disabled|declined|refundpending)/,
        },
        // {
        //   pattern: /statement__row--(declined|refundpending)/,
        // },
    ],
    theme: {
        fontFamily: {
            Roboto: ['"Roboto"', 'sans-serif'],
            headline: ['"Montserrat"', 'sans-serif'],
            Georgia: ['Georgia', 'Times New Roman', 'Times,serif'],
            awesome: '"Font Awesome 6 Free"',
        },
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
            14: '14',
            15: '15',
            16: '16',
        },
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            // padding: (theme) => ({
            //   DEFAULT: 'theme(spacing[4])', // 16px
            //   sm: 'theme(spacing[4])', // 16px
            //   md: 'theme(spacing[8])', // 32px
            //   '2xl': '0', // 0px
            // }),
        },
        extend: {
            screens: {
                conpad: '1264px', // 32px + container + 32px
                short: { raw: '(max-height: 640px)' },
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
                1000: '1000',
                toast: '2001',
                overlay: '2000',
                shortcuts: '1001',
                banner: '1000',
                bannershadow: '999',
                underlay: '990',
                toc: '900',
            },
            backgroundImage: {
                heroBrand:
                    'radial-gradient(145% 100% at 50% 0, #ff0069 0, #ff0069 45%, #b10049 88%)',
                heroCS: 'radial-gradient(145.05% 100% at 50% 0,#1d2b41 0,#020509 57.38%,#0f1a29 88.16%)',
            },
            gridTemplateAreas: {
                // uses grid-areas plugin
                flyout: ['account  close', 'nav  nav', 'footer footer'],
                outline: ['nav', 'main'],
                outlinewide: ['nav main'],
                listing: ['image ', 'description'],
                listingwide: ['description image'],
                blog: ['main', 'footer', 'aside'],
                blogwide: ['main   aside', 'footer aside'],
                blockTTB: ['visual', 'content'],
                blockBTT: ['content', 'visual'],
                blockLTR: ['content visual'],
                blockRTL: ['visual content'],
                listing_work: ['visual', 'content'],
                listing_work_wide: ['content visual'],
                main: ['hero aside content'],
                mainwide: ['aside content'],
                toast: ['message close', 'action action'],
            },
            gridTemplateColumns: {
                featuredcard: '2fr 1fr',
                // listing: '48px 1fr',
                block33: 'minmax(0, 1fr) minmax(0, 2fr)',
                block40: 'minmax(0, 2fr) minmax(0, 3fr)',
                block50: 'repeat(2, minmax(0, 1fr))',
                block60: 'minmax(0, 3fr) minmax(0, 2fr)',
                block66: 'minmax(0, 2fr) minmax(0, 1fr)',
                listing: 'minmax(0, 2fr) minmax(0, 1fr)',
                listing_work: 'minmax(0, 2fr) minmax(0, 3fr)',
                logos: 'repeat(auto-fill, minmax(100px, 1fr))',
                credit: 'auto minmax(auto, 1fr)',
                work: 'repeat(2, minmax(0, 1fr))',
                social: 'repeat(auto-fit, minmax(0, 48px))',
                workcontianer:
                    '56.25vw calc(43.75vw - ((100vw - 75rem) / 2)) minmax(0, 1fr)',
                // work: '56.25vw minmax(0, 1fr)',
            },
            gridTemplateRows: {
                // Complex site-specific row configuration
                // 'layout': '200px minmax(900px, 1fr) 100px',
                wrapper: '1fr auto', // Main layout to allow sticky footer, header not counted.
                layout: 'auto 1fr auto',
                system: '1fr auto',
                card: 'auto 1fr auto',
                home: 'auto minmax(0, 1fr)',
                hero: 'minmax(0, 1fr) auto', // (Breadcrumb trail absolute), content, extra content
                mobilenav: 'minmax(auto, 1fr) auto',
            },
            spacing: {
                50: '12.5rem', // 200px
                120: '30rem', // 480px
                100: '25rem', // 400px
                block: '40vw', // 5:2 default block / cinema
                spread: '50vw', // 2:1
                square: '100vw', // 1:1
                widescreen: '56.25vw', // 16:9
                photo: '66.67vw', // 3:2
                portrait: '150vw', // 2:3
                tv: '75vw', // 4:3
                super16: '60vw', // 5:3 mobile block image
                '5/2pc': '2.5%',
                '5pc': '5%',
                '5px': '0.3125rem', // 5px

                '66Svh': [
                    '66.66vh /* fallback for Opera, IE and etc. */',
                    '66.66svh',
                ],
                '75Svw': [
                    '75vw /* fallback for Opera, IE and etc. */',
                    '75svw',
                ],
            },
            height: {
                screenLvh: [
                    '100vh /* fallback for Opera, IE and etc. */',
                    '100lvh',
                ],
                screenSvh: [
                    '100vh /* fallback for Opera, IE and etc. */',
                    '100svh',
                ],
                screenDvh: [
                    '100vh /* fallback for Opera, IE and etc. */',
                    '100dvh',
                ],
            },
            width: {
                screenLvw: [
                    '100vw /* fallback for Opera, IE and etc. */',
                    '100lvw',
                ],
                screenSvw: [
                    '100vw /* fallback for Opera, IE and etc. */',
                    '100svw',
                ],
                screenDvw: [
                    '100vw /* fallback for Opera, IE and etc. */',
                    '100dvw',
                ],
            },
            minWidth: (theme) => ({
                ...theme('spacing'),
                ...theme('width'),
            }),
            maxWidth: (theme) => ({
                ...theme('spacing'),
                ...theme('width'),
                container: '75rem', // 1200px
            }),
            minHeight: (theme) => ({
                ...theme('spacing'),
                ...theme('height'),
                '33vw': '33.33vw',
                '25vw': '25vw',
                '50vw': '50vw',
            }),
            maxHeight: (theme) => ({
                ...theme('spacing'),
                ...theme('height'),
            }),
            inset: (theme) => ({
                ...theme('spacing'),
                ...theme('width'),
                ...theme('height'),
            }),
            opacity: {
                99: '0.99',
            },
            borderWidth: {
                3: '3px',
                bookmark: '50%',
            },
            borderRadius: {
                // abstract: '6% 16% 48% 11% / 57% 100% 100% 100%',
                abstract: '80% 90% 65% 40% / 50% 100% 100% 100%',
                clipshapeXL: '87% 13% 86% 14% / 15% 81% 19% 85%',
                egg: '100% 100% 100% 35% / 100% 100% 100% 100%',
                tab: '0% 0% 100% 100% / 0% 0% 10% 10% ',
                highlight: '10% 20% 2% 0% / 10% 5% 10% 0%',
                tight: '3px',
            },
            padding: {
                block: '40%', // 5:2
                spread: '50%', // 2:1
                widescreen: '56.25%', // 16:9
                photo: '66.67%', // 3:2
                portrait: '133.33%', // 3:4
                tv: '75%', // 4:3
                square: '100%', // 1:1
                '5/2pc': '2.5%',
                '5pc': '5%',
            },
            lineHeight: {
                note: '1.125rem', // 18 px
                iconXl: '3.00rem', // 48px
                iconMd: '2.00rem', // 32px
                iconSm: '1.50rem', // 16px
                inherit: 'inherit', // inherit parent
            },
            fontSize: {
                micro: [
                    '0.375rem',
                    {
                        // 6px
                        lineHeight: '1',
                    },
                ],
                tiny: [
                    '0.5rem',
                    {
                        // 8px
                        lineHeight: '1',
                    },
                ],
                '3xs': [
                    '0.625rem',
                    {
                        // 10px
                        lineHeight: '1',
                    },
                ],
                '2xs': [
                    '0.6875rem',
                    {
                        // 11px
                        lineHeight: '1',
                    },
                ],
                '2sm': [
                    '0.8125rem',
                    {
                        // 13px
                        lineHeight: '1',
                    },
                ],
                iconXl: [
                    '3.00rem',
                    {
                        // 48px
                        lineHeight: '1',
                    },
                ],
                iconMd: [
                    '2.00rem',
                    {
                        // 32px
                        lineHeight: '1',
                    },
                ],
                iconSm: [
                    '1.50rem',
                    {
                        // 16px
                        lineHeight: '1',
                    },
                ],
                decimal: [
                    '60%',
                    {
                        lineHeight: '1',
                    },
                ],
            },
            textShadow: {
                xs: '1px 1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px -1px 0 var(--tw-shadow-color)',
                md: '1px 1px 5px var(--tw-shadow-color)',
                lg: '15px 15px 10px var(--tw-shadow-color)',
                emboss: '1px 1px var(--tw-shadow-color)',
                heavy: '0 0 5px var(--tw-shadow-color), 0 0 15px var(--tw-shadow-color)',
                headline:
                    '1px 1px 3px rgba(0,0,0, 0.15), 0 0 10px var(--tw-shadow-color)',
                crisp: '0 1px 1px var(--tw-shadow-color)',
                DEFAULT: '2px 2px 0 var(--tw-shadow-color)',
                none: 'none',
            },
            dropShadow: {
                // logo: [
                //   '2px 0px 0px var(--tw-shadow-color)',
                //   '0 2px 0px var(--tw-shadow-color)',
                //   '-2px 0px 0px var(--tw-shadow-color)',
                //   '0 -2px 0px var(--tw-shadow-color)',
                // ],
                logo: ['1px 1px 5px var(--tw-shadow-color)'],
                circle: [
                    '0 20px 10px var(--tw-shadow-color)',
                    '0 10px 5px var(--tw-shadow-color)',
                ],
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)',
                ],
            },
            boxShadow: {
                // Slate 800: rgba(30,41,59, 0.25)
                cardhover: '0 0 75px -25px rgba(0,0,0,.75)',
                '3xl': '0 0 75px 50px var(--tw-shadow-color)',
                '4xl': '0 0 50px 50px rgba(0,0,0,.60)',
                '5xl': '0 0 125px 50px var(--tw-shadow-color)',
                '2xlx': '0 0 10px 5px rgba(35,31,32,.10)',
                '3xlx': '0 0 0px 6px rgba(35,31,32,0.10)',
                '3xlr': '0 0 75px 50px rgba(35,31,32,.25)',
                cookie: '0px 2px 5px -1px var(--tw-shadow-color) ,  0px 0px 100px 25px var(--tw-shadow-color)',
                thumb: 'var(--tw-shadow-color) 0px 2px 5px -1px, var(--tw-shadow-color) 0px 1px 3px -1px',
                inset: 'inset 0 2px 2px -1px rgba(35,31,32,.25)',
                smframe:
                    '0px 0px 10px 5px var(--tw-shadow-color), 0px 0px 30px 0px var(--tw-shadow-color), 0px 0px 3px 3px var(--tw-shadow-color)',
                frame: '0px 4px 12px 0px var(--tw-shadow-color)',
                placeholder: 'inset 0 0px 1px 1px rgba(0,0,0,.10)',
                bannerlink: 'inset 0 3px 3px -1px rgba(0,0,0,.12)',
                tab: '0 0 5px -1px rgba(35,31,32,0.15)',
                insetbase: 'inset 0px -5px 5px -5px rgba(35,31,32,.12)',
                splash: 'inset 0 -16px 60px 0px rgba(35,31,32,.12)',
                hero: 'inset 0 80px 80px -80px rgba(35,31,32,.45)',
                heroimage: 'inset 0 0px 75px 50px rgba(35,31,32,.15)',
                heroimageMedium: 'inset 0 0px 150px 96px rgba(35,31,32,.25)',
                heroimageLarge: 'inset 0 0px 150px 96px rgba(35,31,32,.25)',
                banner: '0px -2px 6px 4px var(--tw-shadow-color)',
                menu: '0px 5px 15px var(--tw-shadow-color)',
                floated:
                    '0px 2px 1px -1px rgba(255,255,255,0.30), inset 0px 2px 1px 1px rgba(30,41,59, 0.15), 0px 0px 10px 5px rgba(30,41,59, 0.15)',
                floatedborder:
                    '0px 0px 0px 2px white, 0px 2px 1px -1px rgba(255,255,255,0.30), inset 0px 2px 1px 1px rgba(30,41,59, 0.15), 0px 0px 10px 5px rgba(30,41,59, 0.15)',
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                brand: {
                    lightest: '#ffe04d',
                    lighter: '#ffdb33',
                    light: '#ffd71a',
                    DEFAULT: '#ffd200', // Brand yellow / #ffd200 https://www.colorhexa.com/ffd200
                    dark: '#e6bd00',
                    darker: '#cca800',
                    darkest: '#b39300',
                },
                // accent: {
                //   light: '#38bdf8', // sky-400
                //   DEFAULT: '#0EA5E9', // sky-500
                //   dark: '#fab914', // sky-600
                // },
                accent: {
                    light: '#ff006a',
                    DEFAULT: '#e6005f', // Accent Magenta / #e6005f https://www.colorhexa.com/e6005f
                    dark: '#cd0054',
                },
                putty: {
                    light: '#fdfdfc',
                    DEFAULT: '#f5f4f0', // https://www.colorhexa.com/f5f4f0
                    dark: '#ebe9e1',
                },
                colorblock: {
                    1: '#145364', // dark blue
                    2: '#fd703b', // orange
                    3: '#fe9b3d', // light orange
                    4: '#fdca3b', // yellow
                },
                attention: '#ffff00',
            },
            // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: '#FF0069',
                            '&:hover': {
                                color: '#ff3387',
                            },
                        },
                        figure: null,
                    },
                },
                lg: {
                    css: {
                        figure: null,
                    },
                },
            }),
            transitionDuration: {
                2000: '2000ms',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                hold: {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                wait: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                'scale-in-bottom': {
                    '0%': {
                        transform: 'scale(0)',
                        'transform-origin': '50% 100%',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'scale(1)',
                        'transform-origin': '50% 100%',
                        opacity: '1',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                'nudge-down': {
                    '0%, 100%': {
                        transform: 'translateY(0%)',
                        'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
                    },
                    '50%': {
                        transform: 'translateY(25%)',
                        'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
                    },
                },
                'nudge-right': {
                    '0%, 100%': {
                        transform: 'translateX(0%)',
                        'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
                    },
                    '50%': {
                        transform: 'translateX(25%)',
                        'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
                    },
                },
                zoom: {
                    '0%': {
                        transform: 'scale(0.85)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
                'zoom-in': {
                    '0%': {
                        transform: 'scale(0.85)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
                'zoom-out': {
                    '0%': {
                        transform: 'scale(1.125)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
                'fade-in-zoom': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.75)',
                    },
                    '25%': {
                        opacity: '1',
                        transform: 'scale(1.10)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-out-down': {
                    from: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    to: {
                        opacity: '0',
                        transform: 'translateY(10%)',
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(50%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-out-up': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-50%)',
                    },
                },
                'fade-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(300%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                'fade-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-300%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                marker: {
                    '0%': {
                        opacity: '0',
                        width: '0',
                    },
                    '100%': {
                        opacity: '1',
                        width: '100%',
                    },
                },
                stretch: {
                    '0%': {
                        opacity: '1',
                        transform: 'scale(0.97)',
                        'transform-origin': '50% 100%',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                        'transform-origin': '50% 100%',
                    },
                },
                role: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(50%) scale(1)',
                    },
                    '5%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)',
                    },
                    '95%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-50%) scale(0.5)',
                        'transform-origin': '50% 100%',
                    },
                },
                'appear-left': {
                    '0%': {
                        transform: 'translateX(-300%)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
                'appear-right': {
                    '0%': {
                        transform: 'translateX(300%)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
                'appear-above': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(-100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'appear-below': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                morph: {
                    '0%': {
                        'border-radius': '40% 60% 60% 40% / 70% 30% 70% 30%',
                    },
                    '100%': {
                        'border-radius': '40% 60%',
                    },
                },
                morphmask: {
                    '0%': {
                        'border-radius':
                            '100% 100% 100% 35% / 100% 100% 100% 100%',
                    },
                    '100%': {
                        'border-radius':
                            '100% 61% 83% 100% / 100% 78% 100% 100% ',
                    },
                },
                spin: {
                    '100%': {
                        transform: 'rotate(1turn)',
                    },
                },
            },
            animation: {
                // Use wait to add a delay but keeping opacity 0 from outset. Include same delay for the second animation.
                // @keyframes name | duration | timing-function | delay | direction | iteration-count | fill-mode | play-state
                blink: 'blink 1s infinite',
                appear: 'wait 100ms, fade-in 750ms ease-out 100ms forwards',
                'scale-in-bottom':
                    'scale-in-bottom 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                zoom: 'zoom 500ms ease-in-out forwards',
                'zoom-in': 'zoom-in 500ms ease-in-out forwards',
                'zoom-out': 'zoom-out 500ms ease-in-out forwards',
                'fade-in': 'wait 250ms, fade-in 1s ease-out 250ms',
                'fade-in-zoom':
                    'wait 250ms, fade-in-zoom 500ms ease-out 250ms forwards',
                'fade-in-down':
                    'wait 100ms, fade-in-down 500ms ease-in-out 100ms',
                'fade-out-down': 'fade-out-down 500ms ease-out forwards',
                'fade-in-up': 'fade-in-up 250ms ease-out forwards',
                'fade-out-up': 'fade-out-up 750ms ease-out forwards',
                'fade-in-left': 'fade-in-left 1s ease-out',
                'fade-in-right': 'fade-in-right 1s ease-out',
                'nudge-down': 'nudge-down 1s infinite',
                'nudge-right': 'nudge-right 1s 2',
                role: 'role 4s ease-in forwards',
                stretch: 'stretch 500ms ease-in forwards',
                marker: 'marker 500ms ease-out forwards',
                'appear-left': 'appear-left 500ms ease-out forwards',
                'appear-right':
                    'wait 250ms, appear-right 1s ease-out 250ms forwards',
                morph: 'morph 10s linear infinite alternate, spin 25s linear infinite 2500ms reverse',
                morphmask: 'morphmask 120s linear infinite alternate',
                'morph-delay':
                    'morph 60s linear infinite alternate, spin 60s linear infinite  8s reverse',
                staticmorph: 'morph 60s linear infinite alternate',
                'fade-out-delay':
                    'hold 2.5s, fade-out 1.5s ease-out forwards 2.5s',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@savvywombat/tailwindcss-grid-areas'),
        require('tailwindcss-animate'),
        // https://laravel-code.tips/you-can-add-this-tailwind-plugin-to-generate-child-selector-variants/
        plugin(({ addVariant }) => {
            // Targets any img tag inside the element with img: class
            addVariant('img', '& img');
            addVariant('permalink', ['& h1', '& h2']);
            addVariant('permalink-first', [
                '&:first-child h1',
                '&:first-child h2',
                '&:first-child h3',
                '&:first-child h4',
                '&:first-child h5',
            ]);
        }),
        plugin(({ addUtilities, matchUtilities, theme }) => {
            addUtilities({
                '.perspective': {
                    perspective: '800px',
                },
                '.isometric': {
                    'transform-style': 'preserve-3d',
                    transform:
                        'perspective(800px) rotateX(51deg) rotateY(0deg) rotate(43deg)',
                },
            });
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') },
            );
        }),
    ],
};
