
function onInputText(textInput) {
    if (gMeme.selectedLineIdx === null) {
        createMeme(gMeme.selectedImgId);
        addLine();
        gMeme.lines[gMeme.selectedLineIdx].txt = textInput;

    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].txt = textInput;
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