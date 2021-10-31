'use strict'

function onInit() {
    renderImages();
}

function onOpenGallery() {
    document.querySelector('.main-content-gallery').style.display = 'block';
    document.querySelector('.meme-container').style.display = 'none';

    document.querySelector('.saved-memes-container').style.display = 'none';

    renderImages();
}

function onClickMeme(imgId) {
    document.querySelector('.main-content-gallery').style.display = 'none';
    document.querySelector('.meme-container').style.display = 'flex';

    document.querySelector('.saved-memes-container').style.display = 'none';
    document.querySelector('.input-text').value = '';

    resizeCanvas();
    createMeme(imgId);
    renderCanvas();
    addListeners();
}




