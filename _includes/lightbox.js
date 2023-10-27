import PhotoSwipeLightbox from '/assets/photoswipe/photoswipe-lightbox.esm.js';
const options = {
    gallery: '#lightbox, .lightbox',
    children: 'a[data-lightbox]',
    wheelToZoom: true,
    bgOpacity: 0.85,
    padding: { top: 48, bottom: 48, left: 32, right: 32 },
    pswpModule: () => import('/assets/photoswipe/photoswipe.esm.js'),
};
const lightbox = new PhotoSwipeLightbox(options);

lightbox.on('uiRegister', () => {
    lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        className:
            'bg-slate-900/75 !opacity-0 duration-300 rounded text-white text-sm max-w-[calc(100%-4rem)] w-auto absolute left-1/2 -translate-x-1/2 bottom-2.5 px-2 py-1',
        html: 'Caption text',
        // eslint-disable-next-line no-unused-vars
        onInit: (el, pswp) => {
            const captionDom = el;
            lightbox.pswp.on('change', () => {
                if (!captionDom.classList.contains('!opacity-0')) {
                    captionDom.classList.add('!opacity-0');
                }
                const currSlideElement = lightbox.pswp.currSlide.data.element;
                let captionHTML = '';
                if (currSlideElement) {
                    const hiddenCaption = currSlideElement.querySelector(
                        '.hidden-caption-content'
                    );
                    if (hiddenCaption) {
                        // get caption from element with class hidden-caption-content
                        captionHTML = hiddenCaption.innerHTML;
                        captionDom.classList.remove('!opacity-0');
                    } else {
                        // get caption from alt attribute
                        if (!captionDom.classList.contains('!opacity-0')) {
                            el.classList.add('!opacity-0');
                        }
                        captionHTML = currSlideElement
                            .querySelector('img')
                            .getAttribute('alt');
                    }
                }
                captionDom.innerHTML = captionHTML || '';
            });
        },
    });
});
lightbox.init();
