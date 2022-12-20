/* Gallery slider JS */

const gallerySlider = {};

gallerySlider.leftArrowEl = document.querySelector('.leftArrow');
gallerySlider.rightArrowEl = document.querySelector('.rightArrow');
gallerySlider.gallImage1 = document.getElementById('gallImage1');
gallerySlider.gallImage2 = document.getElementById('gallImage2');
gallerySlider.gallImage3 = document.getElementById('gallImage3');

gallerySlider.currentCenter = function(idNum = 'gallImage1') {
    if (idNum == 'gallImage1') {
        gallerySlider.leftArrowEl.style.opacity = 0.3;
        gallerySlider.rightArrowEl.style.opacity = 1;

        gallerySlider.currentImage = gallerySlider.gallImage1;
        gallerySlider.nextImage = gallerySlider.gallImage2;
    } else if (idNum == 'gallImage2') {
        gallerySlider.leftArrowEl.style.opacity = 1;
        gallerySlider.rightArrowEl.style.opacity = 1;
        gallerySlider.previousImage = gallerySlider.gallImage1;
        gallerySlider.currentImage = gallerySlider.gallImage2;
        gallerySlider.nextImage = gallerySlider.gallImage3;
    } else {
        gallerySlider.leftArrowEl.style.opacity = 1;
        gallerySlider.rightArrowEl.style.opacity = 0.3;

        gallerySlider.previousImage = gallerySlider.gallImage2;
        gallerySlider.currentImage = gallerySlider.gallImage3;
    }
};

gallerySlider.changeImage = (event) => {
    // console.log(event.target)
    if (event.target.alt == 'next image' && gallerySlider.currentImage.id != 'gallImage3' ) {
        gallerySlider.currentImage.classList.toggle('galleryMain');
        gallerySlider.currentImage.classList.toggle('gallerySub');

        gallerySlider.currentImage = gallerySlider.nextImage;
        gallerySlider.currentCenter(gallerySlider.currentImage.id);

        gallerySlider.currentImage.classList.toggle('galleryMain');
        gallerySlider.currentImage.classList.toggle('gallerySub');
    } else if (event.target.alt == 'previous image' && gallerySlider.currentImage.id != 'gallImage1' ) {
        gallerySlider.currentImage.classList.toggle('galleryMain');
        gallerySlider.currentImage.classList.toggle('gallerySub');

        gallerySlider.currentImage = gallerySlider.previousImage;
        gallerySlider.currentCenter(gallerySlider.currentImage.id);

        gallerySlider.currentImage.classList.toggle('galleryMain');
        gallerySlider.currentImage.classList.toggle('gallerySub');
    }
};

gallerySlider.setupEventListener = () => {

    gallerySlider.leftArrowEl.addEventListener('click', gallerySlider.changeImage);
    gallerySlider.rightArrowEl.addEventListener('click', gallerySlider.changeImage);

};

gallerySlider.init = () => {
    gallerySlider.currentCenter();
    gallerySlider.setupEventListener();
};

gallerySlider.init();