'use strict'

function onInputText(textInput) {

    //getSelectedLineIdx from service!!
    if (gMeme.selectedLineIdx === null) {
        createMeme(gMeme.selectedImgId);
        addLine();
        var selecteLine = getSelectedLine();
        selecteLine.txt = textInput;
    }
    else {
        var selecteLine = getSelectedLine();
        selecteLine.txt = textInput;
    }
    renderCanvas()
}

function onMoveUp() {
    moveUp();
    renderCanvas();
}

function onMoveDown() {
    moveDown();
    renderCanvas();
}

function onToggleFocus() {
    toggleFocus();
    renderCanvas();
}

function onAddLine() {
    document.querySelector('.input-text').value = '';
    addLine();
    renderCanvas();
}

function onDeleteLine() {
    deleteLine();
    renderCanvas();
}

function onFontIncrease() {
    fontIncrease();
    renderCanvas();
}


function onFontDecrease() {
    fontDecrease();
    renderCanvas();
}

function onAlignLeft() {
    alignLeft();
    renderCanvas();
}

function onAlignCenter() {
    alignCenter();
    renderCanvas();
}

function onAlignRight() {
    alignRight();
    renderCanvas();
}

function onChangeFont(inputFont) {
    changeFont(inputFont);
    renderCanvas();
}


function onClickStrokeFontColor() {
    var strokeInput = document.querySelector('.stroke-input');
    strokeInput.click();
}
function onChangeStrokeFontColor(stkColor) {
    changeStrokeFontColor(stkColor);
    renderCanvas();
}

function onClickFontColor() {
    var fontInput = document.querySelector('.color-input');
    fontInput.click();
}

function onChangeFontColor(fontColor) {
    changeFontColor(fontColor);
    renderCanvas();
}

function onDownloadCanvas(elLink) {
    downloadCanvas(elLink);

}

function onUploadAndShare() {
    uploadImg();
}

function onSaveMeme() {
    saveMeme();
}

function onOpenSavedMemes() {
    document.querySelector('.saved-memes-container').style.display = 'block';
    document.querySelector('.main-content-gallery').style.display = 'none';
    document.querySelector('.meme-container').style.display = 'none';

    renderSavedMemes();

}


function renderSavedMemes() {

    var gSavedMemes = getSavedMemes();
    if (!gSavedMemes.length) return;
    else {
        var strHtmls = gSavedMemes.map((meme) => {
            return `<img crossorigin="anonymous" class="img-gallery" src="${meme.url}" alt="meme"
            onclick="onClickSavedMeme(${meme.id})"/>`;
        })

    }
    document.querySelector('.saved-memes-content').innerHTML = strHtmls.join('');
}

function onClickSavedMeme(id) {
    gMeme = getSavedMemeById(id).meme;
    document.querySelector('.main-content-gallery').style.display = 'none';
    document.querySelector('.meme-container').style.display = 'flex';

    document.querySelector('.saved-memes-container').style.display = 'none';
    document.querySelector('.input-text').value = '';


    resizeCanvas();
    renderCanvas();
    addListeners();
}

function getSavedMemeById(id) {
    var savedMemes = getSavedMemes();
    if (!savedMemes) return;
    return savedMemes.find(function (meme) {
        return meme.id === id;
    });
}
