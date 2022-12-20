/* Gallery slider JS */

const gallerySlider = {};

gallerySlider.leftArrowEl = document.querySelector('.leftArrow');
gallerySlider.rightArrowEl = document.querySelector('.rightArrow');
gallerySlider.gallImage1 = document.querySelector('.gallImage1');
gallerySlider.gallImage2 = document.querySelector('.gallImage2');
gallerySlider.gallImage3 = document.querySelector('.gallImage3');

gallerySlider.currentImage = function(classNum = '.gallImage1') {
    if (classNum == '.gallImage1') {
        gallerySlider.leftArrowEl.style.opacity = 0.3;
    } else if (classNum == '.gallImage3') {
        gallerySlider.rightArrowEl.style.opacity = 0.3;
    }
};

gallerySlider.changeImage = (event) => {
    console.log(event.target);
}

gallerySlider.setupEventListener = () => {

    gallerySlider.leftArrowEl.addEventListener('click', gallerySlider.changeImage);
    gallerySlider.rightArrowEl.addEventListener('click', gallerySlider.changeImage);

};

gallerySlider.init = () => {
    gallerySlider.currentImage();

    gallerySlider.setupEventListener();
};

gallerySlider.init();