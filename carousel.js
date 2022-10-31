(function() {

    const slides = [
        '<div className="card-price"><img className="image-price" src="img/benefits-icon.svg" alt="Icon Price"/><p className="package">12 тренувань</p><p className="package">(місячний)</p><p className="price">650 грн</p></div>',
        '<div className="card-price card-price-center"><img className="image-price" src="img/benefits-icon.svg" alt="Icon Price"/><p className="package">Ранковий 12 тренувань</p><p className="package">з 8:00-13:00</p><p className="price price-center">550 грн</p></div>',
        '<div className="card-price"><img className="image-price" src="img/benefits-icon.svg" alt="Icon Price"/><p className="package">Безліміт</p><p className="package">(місячний)</p><p className="price">750 грн</p></div>'
    ];

    let currentSlideIdx = 0;

    const slideContainer = document.querySelector('.productCarousel .carouselSlides');

    function renderSlide() {
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 500) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 800) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML +=slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlide();
    }

    renderSlide();

    setInterval(nextSlide, 6000);

    const btnNext = document.querySelector('.productsCarousel .btnNext');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.productsCarousel .btnPrev');
    btnPrev.addEventListener('click', prevSlide);

})();

