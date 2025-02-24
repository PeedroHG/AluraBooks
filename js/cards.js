const JsMobile = () => {
    const swiperMobile = new Swiper(".swiper", {
        spaceBetween: 10,
        slidesPerView: 2,
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true
        }
    });
}

const JsTablet = () => {
    const swiperMobile = new Swiper(".swiper", {
        spaceBetween: 70,
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

const WindowWidthCatch = () => {
    const larguraTela = window.innerWidth

    if (larguraTela >= 1024) {
        JsTablet();
    } else {
        JsMobile();
    }
}

WindowWidthCatch();
window.addEventListener("resize", WindowWidthCatch)
