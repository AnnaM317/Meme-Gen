'use strict'

var gMeme;
var gSavedMemes = [];


function createMeme(imgId) {
    var meme = {
        selectedImgId: imgId,
        selectedLineIdx: null,
        lines: []
    }
    gMeme = meme;
}

function getSelectedLine() {
    return (gMeme.selectedLineIdx !== null) ? gMeme.lines[gMeme.selectedLineIdx] : null
}

function addLine() {
    //string ''
    gMeme.selectedLineIdx = gMeme.lines.length;//?-1
    var x, y;
    // console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx);
    if (gMeme.selectedLineIdx === 0) {
        x = gElCanvas.width / 2;
        y = 70;
    }

    else if (gMeme.selectedLineIdx === 1) {
        x = gElCanvas.width / 2;
        y = gElCanvas.height - 30;
    }
    else {
        x = gElCanvas.width / 2;
        y = gElCanvas.height / 2;
    }
    var newLine = {
        txt: 'Enter New Text',
        fontSize: 50,
        align: 'center',
        strokeColor: 'white',
        color: 'black',
        x,
        y,
        font: 'Impact',
    }
    gMeme.lines.push(newLine);
    document.querySelector('.input-text').placeholder = 'Enter Text Here';

}

function moveUp() {
    if (gMeme.selectedLineIdx !== null) {
        gMeme.lines[gMeme.selectedLineIdx].y -= 5;
    }
}

function moveDown() {
    if (gMeme.selectedLineIdx !== null) {
        gMeme.lines[gMeme.selectedLineIdx].y += 5;
    }
}

function toggleFocus() {
    if (gMeme.selectedLineIdx === null || !gMeme.lines.length) return;
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++;
    }
    else {
        gMeme.selectedLineIdx = 0;
    }
    document.querySelector('.input-text').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function deleteLine() {
    if (gMeme.selectedLineIdx !== null) {
        if (gMeme.lines.length === 1) {
            gMeme.lines.splice(gMeme.selectedLineIdx, 1);
            gMeme.selectedLineIdx = null;
            document.querySelector('.input-text').value = '';
        }
        else if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
            gMeme.lines.splice(gMeme.selectedLineIdx, 1);
            gMeme.selectedLineIdx = 0;
        }

        else {
            gMeme.lines.splice(gMeme.selectedLineIdx, 1);
            gMeme.selectedLineIdx = gMeme.selectedLineIdx++;
        }
    }
}

function fontIncrease() {
    if (gMeme.selectedLineIdx === null) return;//??
    const selectedLine = getSelectedLine();
    selectedLine.fontSize += 2;
}

function fontDecrease() {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.fontSize -= 2;
}

function alignLeft() {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.align = 'left';
    selectedLine.x = 10;
}

function alignCenter() {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.align = 'center';
    selectedLine.x = gElCanvas.width / 2;
}

function alignRight() {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.align = 'right';
    selectedLine.x = gElCanvas.width - 10;
}

function changeFont(inputFont) {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.font = inputFont;
}

function changeStrokeFontColor(stkColor) {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.strokeColor = stkColor;
}

function changeFontColor(fontColor) {
    if (gMeme.selectedLineIdx === null) return;
    const selectedLine = getSelectedLine();
    selectedLine.color = fontColor;
}

function saveMeme() {
    // selectedindex null?
    // queryselector
    //render?
    var url = gElCanvas.toDataURL('image/jpeg');
    var savedMeme = createSavedMeme(gMeme, url);
    gSavedMemes.push(savedMeme);
    saveToStorage(KEY, gSavedMemes);
}