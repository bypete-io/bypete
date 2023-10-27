/* eslint-disable import/no-unresolved */
import './main.pcss';
import Cookies from 'js-cookie';
import smoothscroll from 'smoothscroll-polyfill';
// https://v8.swiperjs.com/swiper-api#custom-build
import Swiper, {
    // Virtual,
    // Keyboard,
    // Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    // Parallax,
    // FreeMode,
    // Grid,
    // Manipulation,
    Zoom,
    // Lazy,
    // Controller,
    A11y,
    // History,
    HashNavigation,
    Autoplay,
    EffectFade,
    // EffectCube,
    // EffectFlip,
    // EffectCoverflow,
    // EffectCards,
    EffectCreative,
    Thumbs,
} from 'swiper';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import persist from '@alpinejs/persist';
import sticky from 'alpinejs-sticky';

import JustValidate from 'just-validate';

Swiper.use([
    Navigation,
    Pagination,
    Scrollbar,
    Autoplay,
    EffectFade,
    Thumbs,
    Zoom,
    HashNavigation,
    A11y,
    EffectCreative,
]);

Alpine.plugin(intersect);
Alpine.plugin(persist);
Alpine.plugin(sticky);
window.Cookies = Cookies;

/* Alpine JS | Re-usable Data
--------------------------------------------------------------------------------*/
document.addEventListener('alpine:init', () => {
    Alpine.store('cache', {
        headerSM: null,
        headerMD: null,
        theme: null,
    });
    Alpine.data('toc', () => ({
        open: false,
        trigger: {
            // eslint-disable-next-line func-names
            '@click': function () {
                this.open = !this.open;
            },
            // eslint-disable-next-line func-names
            '@click.outside': function () {
                setTimeout(() => {
                    this.open = false;
                }, 750);
            },
        },
    }));

    Alpine.data('credit', () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        },
    }));

    // https://alpinejs.dev/globals/alpine-data#using-magic-properties - use this.$refs
    // Activates on scroll up
    Alpine.data('stickybanner', () => ({
        lastScrollTop: 0,
        reactOnScroll() {
            const ba = this.$refs.banner.clientHeight;
            const sh = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
            );
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const ch =
                window.innerHeight || document.documentElement.clientHeight;

            // Only fix header for longer pages
            if (sh >= ch * 1.25) {
                if (st > ch * 0.5) {
                    // halfway viewport height
                    this.pageTop = true;
                }

                if (st === 0 || st <= ba) {
                    // at top
                    this.$data.banner = 'start';
                    this.pageTop = false;
                } else if (st > this.$data.lastScrollTop && st >= ba) {
                    // going down
                    this.$data.banner = 'down';
                } else if (st < this.$data.lastScrollTop) {
                    // going up
                    this.$data.banner = 'up';
                    // this.pageTop = false;
                } else {
                    this.$data.banner = 'unknown';
                }
            }
            this.$data.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
    }));

    Alpine.data('overlay', () => ({
        showOverlay: false,
        init() {
            this.$watch('showOverlay', (value) => {
                if (value) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });
        },
    }));

    Alpine.data('menu', () => ({
        open: false,

        freeze() {
            this.menuUnderlay = true;
            this.$refs.body.classList.add('overflow-hidden');
            this.$refs.banner.classList.add('banner--freeze');
        },
        thaw() {
            this.menuUnderlay = false;
            this.$refs.body.classList.remove('overflow-hidden');
            this.$refs.banner.classList.remove('banner--freeze');
        },

        checkAriaExpanded() {
            const buttons = this.$refs.banner.querySelectorAll('button');
            const expandedButtonFound = [...buttons].some(
                (button) => button.getAttribute('aria-expanded') === 'true',
            );

            if (expandedButtonFound) {
                this.freeze();
            } else {
                this.thaw();
            }
        },

        toggle() {
            this.open = !this.open;
            if (this.open) {
                this.$refs.button.focus();
            }
            this.checkAriaExpanded();
        },
        close(focusAfter) {
            this.open = false;
            this.checkAriaExpanded();
            if (focusAfter) {
                focusAfter.focus();
            }
        },

        init() {
            this.$watch('open', (value, oldValue) => {
                this.checkAriaExpanded();
            });
        },
    }));

    Alpine.data('hamburger', () => ({
        freeze() {
            this.$refs.body.classList.add('overflow-hidden');
            this.$dispatch('freeze-banner', this.smNavOpen);
        },
        thaw() {
            this.$refs.body.classList.remove('overflow-hidden');
            this.$dispatch('thaw-banner', this.smNavOpen);
        },
        toggle() {
            let cache = this.$store.cache.theme;
            if (!cache) {
                cache = document
                    .querySelector('meta[name="theme-color"]')
                    .getAttribute('content');
                this.$store.cache.theme = cache;
            }
            this.smNavOpen = !this.smNavOpen;
            if (this.smNavOpen) {
                document
                    .querySelector('meta[name="theme-color"]')
                    .setAttribute('content', '#ffd200'); // brand
                this.freeze();
            } else {
                document
                    .querySelector('meta[name="theme-color"]')
                    .setAttribute('content', cache); // revert to previously cached
                this.thaw();
            }
        },
    }));

    Alpine.data('cookie', () => ({
        hidecookie: true,
        cookie_name: 'cnotice',
        freeze() {
            this.$refs.body.classList.add('overflow-hidden');
            this.$dispatch('show-overlay', this.hidecookie);
        },
        thaw() {
            this.$refs.body.classList.remove('overflow-hidden');
            this.$dispatch('hide-overlay', this.hidecookie);
        },
        init() {
            setTimeout(() => {
                this.hidecookie = Cookies.get(this.cookie_name);
                if (this.hidecookie) {
                    // do nothing
                } else {
                    this.freeze();
                }
            }, 6000);
        },
        accept() {
            this.hidecookie = true;
            this.thaw();
            Cookies.set(this.cookie_name, true, {
                expires: 365,
                path: '/',
                secure: true,
                sameSite: 'strict',
            });
        },
        hide() {
            this.hidecookie = true;
            this.thaw();
        },
    }));

    Alpine.data('roles', () => ({
        roleIndex: 0,
        roleObj: [
            { preposition: 'work in', role: 'Front-End Development' },
            { preposition: 'work on', role: 'Ui/UX Design' },
            { preposition: 'create', role: 'inspired products' },
            { preposition: 'build', role: 'E-mail layouts' },
            { preposition: 'oversee', role: 'Content management' },
        ],
        role: '',
        preposition: '',
        caret: true,
        typingTimer: null,
        doneTypingInterval: 6000,

        startTyping() {
            this.role = '';
            this.preposition = this.roleObj[this.roleIndex].preposition;
            this.typingTimer = setInterval(() => {
                if (
                    this.role.length < this.roleObj[this.roleIndex].role.length
                ) {
                    this.role +=
                        this.roleObj[this.roleIndex].role[this.role.length];
                } else {
                    clearInterval(this.typingTimer);
                    setTimeout(() => {
                        this.typingTimer = setInterval(() => {
                            if (this.role.length > 0) {
                                this.role = this.role.slice(0, -1);
                            } else {
                                clearInterval(this.typingTimer);
                                this.preposition = '';
                                this.roleIndex =
                                    (this.roleIndex + 1) % this.roleObj.length;
                                this.startTyping();
                            }
                        }, 25);
                    }, this.doneTypingInterval);
                }
            }, 75);
        },

        init() {
            this.startTyping();
        },
    }));

    Alpine.data('justvalidate', () => ({
        form: undefined,
        validator: undefined,
        wordcount: undefined,
        init() {
            this.form = this.$refs.form;
            this.validator = new JustValidate(this.form, {
                errorFieldCssClass: ['error'],
                errorLabelCssClass: ['text-red-600', 'text-sm', 'mt-1'],
                errorLabelStyle: false,
                errorFieldStyle: false,
                successFieldCssClass: ['valid'],
                successLabelCssClass: ['valid'],
                validateBeforeSubmitting: true,
            });
            this.validator
                .addField('#InputName', [
                    {
                        rule: 'required',
                        errorMessage: 'Please add your name',
                    },
                ])
                .addField('#InputEmail', [
                    {
                        rule: 'required',
                        errorMessage: 'Please add your email',
                    },
                    {
                        rule: 'email',
                        errorMessage: 'Please check your email address',
                    },
                ])
                .addField('#InputMessage', [
                    {
                        rule: 'required',
                        errorMessage: "Don't forget to add your message!",
                    },
                    {
                        validator: (value) =>
                            value !== undefined &&
                            value.trim().split(' ').length > 3,
                        errorMessage: 'Message should be more than 3 words.',
                    },
                ])
                .addField('#_byPete', [
                    {
                        validator: (value) => value === '',
                    },
                ]);
        },
        onSubmit() {
            this.validator.onSuccess((event) => {
                this.form.submit();
            });
        },
    }));
});

window.Alpine = Alpine;

Alpine.start();
smoothscroll.polyfill();

/* Alpine JS | Sandbox
https://alpinejs.dev/advanced/extending
--------------------------------------------------------------------------------*/

/* Vanilla JS | Common 
--------------------------------------------------------------------------------*/
const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
};

/* Vanilla JS | Useful functions | Animate CSS
--------------------------------------------------------------------------------*/
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
        if (typeof callback === 'function') callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
}

/* Vanilla JS | Hide Prompts | [ Uses "data-prompt" attribute ]
--------------------------------------------------------------------------------*/
const prompts = document.querySelectorAll('[data-prompt]');

function hidePrompts(items, delay = 1000) {
    items.forEach((item) => {
        if (isInViewport(item)) {
            setTimeout(() => {
                item.classList.add('animate-fade-out-down');
            }, delay);
        }
    });
}

if (prompts) {
    hidePrompts(prompts, 3000);
    let cached = null;
    window.addEventListener('scroll', (event) => {
        if (!cached) {
            setTimeout(() => {
                hidePrompts(prompts);
                cached = null;
            }, 1500);
        }
        cached = event;
    });
}

/* Vanilla JS | Swipers |
--------------------------------------------------------------------------------*/

// Swipers | Testimonials [Variables scoped to block]
{
    const swiperClass = '.swiper--testimonials';
    const swiperDom = document.querySelector(swiperClass);

    if (swiperDom !== null) {
        let swiperTestimonials = new Swiper(swiperClass, {
            // eslint-disable-line no-unused-vars
            speed: 2000,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            // centeredSlides: true,
            autoplay: {
                delay: 7000,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 1,
                },
            },
        });
        swiperTestimonials = swiperDom.swiper;
    }
}

// Swipers | Ratings  [Variables scoped to block]
{
    const swiperClass = '.swiper--reviews';
    const swiperDom = document.querySelector(swiperClass);

    if (swiperDom !== null) {
        let swiperReviews = new Swiper(swiperClass, {
            // eslint-disable-line no-unused-vars
            speed: 2000,
            slidesPerView: 1,
            direction: 'vertical',
            autoplay: {
                delay: 6000,
            },
        });
        swiperReviews = swiperDom.swiper;
    }
}

// Vanilla JS | Swipers | Home [Variables scoped to block]
{
    const swiperClass = '.swiper--home';
    const swiperDom = document.querySelector(swiperClass);

    if (swiperDom !== null) {
        let swiperHome = new Swiper(swiperClass, {
            centeredSlides: true,
            effect: 'creative',
            creativeEffect: {
                perspective: false,
                prev: {
                    scale: '0.95',
                    opacity: '0',
                },
                next: {
                    scale: '0.95',
                    opacity: '0',
                },
            },
            speed: 250,
            loop: true,
            autoplay: {
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                delay: 7500,
            },
            slidesPerView: 1,
            navigation: {
                nextEl: `${swiperClass}__next`,
                prevEl: `${swiperClass}__prev`,
            },
            pagination: {
                el: `${swiperClass}__pagination`,
                clickable: true,
            },
            watchOverflow: true, // disable if only single slide
            on: {
                init: () => {},
                autoplayStop: () => {
                    swiperHome.autoplay.start();
                },
                autoplayResume: () => {},
            },
        });
        swiperHome = swiperDom.swiper;
    }
}

// Vanilla JS | Swipers | Clients [Variables scoped to block]
{
    const swiperClass = '.swiper--clients';
    const swiperDom = document.querySelector(swiperClass);

    if (swiperDom !== null) {
        let swiperClients = new Swiper(swiperClass, {
            speed: 1500,
            loop: true,
            autoplay: {
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                delay: 6000,
            },
            breakpoints: {
                300: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1024: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                },
            },
        });
        swiperClients = swiperDom.swiper;
    }
}

// Swipers | Block - Can have duplicates [Variables scoped to block]
{
    const swiperClass = '.swiper--block';
    const swiperArray = document.querySelectorAll(swiperClass);

    Array.from(swiperArray).forEach((swiper, i) => {
        const ref = `swiper--block${i}`; // swiper--block0 - without . class prefix
        const refClass = `.swiper--block${i}`; // .swiper--block0 - with . class prefix
        swiper.classList.add(ref);
        const prev = swiper.querySelector('.swiper-button-prev');
        const next = swiper.querySelector('.swiper-button-next');
        const pagination = swiper.querySelector('.swiper-pagination');

        if (prev !== null) {
            prev.classList.add(`${ref}__prev`);
        }
        if (next !== null) {
            next.classList.add(`${ref}__next`);
        }
        if (pagination !== null) {
            pagination.classList.add(`${ref}__pagination`);
        }
        const slider = new Swiper(swiper, {
            grabCursor: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            speed: 1000,
            slidesPerView: 1,
            // centeredSlides: true,
            autoplay: {
                delay: 7500,
            },
            pagination: {
                el: `${refClass}__pagination`, // .swiper--block0__pagination
                clickable: true,
            },
            navigation: {
                nextEl: `${refClass}__next`, // .swiper--block0__next
                prevEl: `${refClass}__prev`, // .swiper--block0__prev
            },
            watchOverflow: true, // disable if only single slide
        });
        if (slider.slides.length === 1) {
            document.querySelector(refClass).classList.add('swiper-lock');
        }
    }, 'myThisArg');
}
