'use strict'

var gImages = [];
_createImages();


function _createImage(id, url, keywords) {
    return {
        id: id,
        url: url,
        keywords: keywords,
    }
}

function _createImages() {
    gImages = [
        _createImage(1, 'imgs/1.jpg', ['trump']),
        _createImage(2, 'imgs/2.jpg', ['dog']),
        _createImage(3, 'imgs/3.jpg', ['baby,dog']),
        _createImage(4, 'imgs/4.jpg', ['cat']),
        _createImage(5, 'imgs/5.jpg', ['baby']),
        _createImage(6, 'imgs/6.jpg', ['funny']),
        _createImage(7, 'imgs/7.jpg', ['baby']),
        _createImage(8, 'imgs/8.jpg', ['funny']),
        _createImage(9, 'imgs/9.jpg', ['baby']),
        _createImage(10, 'imgs/10.jpg', ['funny']),
        _createImage(11, 'imgs/11.jpg', ['funny']),
        _createImage(12, 'imgs/12.jpg', ['funny']),
        _createImage(13, 'imgs/13.jpg', ['funny']),
        _createImage(14, 'imgs/14.jpg', ['funny']),
        _createImage(15, 'imgs/15.jpg', ['funny']),
        _createImage(16, 'imgs/16.jpg', ['funny']),
        _createImage(17, 'imgs/17.jpg', ['putin']),
        _createImage(18, 'imgs/18.jpg', ['funny']),
    ]
}


function getImagesForDisplay() {
    return gImages;
}

function renderImages() {
    var images = getImagesForDisplay();
    var strHtmls = images.map(function (img) {
        return `<img class="img-gallery" src="${img.url}" alt="${img.keywords[0]}" onclick="onClickMeme(${img.id})" />`;
    });
    document.querySelector('.main-gallery-container').innerHTML = strHtmls.join('');
}

function getImageById(imgId) {
    return gImages.find(function (img) {
        return img.id === imgId;
    })
}






