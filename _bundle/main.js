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
        theme: null,
        banner: null,
    });
    Alpine.data('toc', () => ({
        open: false,
        toggle() {
            this.open = !this.open;
            if (this.open) {
                this.$refs.tocbutton.focus();
            }
        },
        close(focusAfter) {
            if (focusAfter) {
                focusAfter.focus();
            }
            setTimeout(() => {
                this.open = false;
            }, 750);
        },
    }));

    Alpine.data('credit', () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        },
    }));

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
                    this.$store.cache.banner = 'banner--start';
                    this.pageTop = false;
                } else if (st > this.$data.lastScrollTop && st >= ba) {
                    // going down
                    this.$store.cache.banner = 'banner--down';
                } else if (st < this.$data.lastScrollTop) {
                    // going up
                    this.$store.cache.banner = 'banner--up';
                } else {
                    this.$store.cache.banner = 'banner--unknown';
                }
            }
            this.$data.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
    }));

    Alpine.data('menu', () => ({
        open: false,
        freeze(freezeState) {
            this.$refs.body.classList.toggle('overflow-hidden', freezeState);
            this.$dispatch('show-underlay', { visible: freezeState });
        },
        checkAriaExpanded() {
            const buttons = this.$refs.banner.querySelectorAll('button');
            const expandedButtonFound = [...buttons].some(
                (button) => button.getAttribute('aria-expanded') === 'true',
            );
            this.freeze(expandedButtonFound);
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
        freeze(freezeState) {
            this.$refs.body.classList.toggle('overflow-hidden', freezeState);
        },
        toggle() {
            const themeMeta = document.querySelector(
                'meta[name="theme-color"]',
            );
            const cache =
                this.$store.cache.theme || themeMeta.getAttribute('content');
            this.$store.cache.theme = cache;
            this.smNav = !this.smNav;
            themeMeta.setAttribute('content', this.smNav ? '#ffd200' : cache);
            this.freeze(this.smNav);
        },
    }));

    Alpine.data('cookie', () => ({
        cookie: '',
        toastCookie: false,
        cookie_name: 'cnotice',
        freeze(freezeState) {
            this.toastCookie = freezeState;
            this.$refs.body.classList.toggle('overflow-hidden', freezeState);
            this.$dispatch('show-overlay', { visible: freezeState });
        },
        init() {
            setTimeout(() => {
                this.cookie = Cookies.get(this.cookie_name);
                if (!this.cookie) {
                    this.freeze(true);
                }
            }, 6000);
        },
        accept() {
            this.freeze(false);
            Cookies.set(this.cookie_name, true, {
                expires: 365,
                path: '/',
                secure: true,
                sameSite: 'strict',
            });
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

/* Vanilla JS | Common 
--------------------------------------------------------------------------------*/

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
            autoplay: {
                delay: 7500,
            },
            pagination: {
                el: `.${ref}__pagination`, // .swiper--block0__pagination
                clickable: true,
            },
            navigation: {
                nextEl: `.${ref}__next`, // .swiper--block0__next
                prevEl: `.${ref}__prev`, // .swiper--block0__prev
            },
            watchOverflow: true, // disable if only single slide
        });
        if (slider.slides.length === 1) {
            document.querySelector(`.${ref}`).classList.add('swiper-lock');
        }
    }, 'myThisArg');
}
