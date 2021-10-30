var gMeme;

function createMeme(imgId) {
    var meme = {
        selectedImgId: imgId,
        //problem- deleting row zero and selected index stays zero? 
        selectedLineIdx: null,
        lines: [
            // {
            //     txt: '',
            //     fontSize: 50,
            //     align: 'center',
            //     strokeColor: 'white',
            //     color: 'black',
            //     x: gElCanvas.width / 2,
            //     y: 70,
            //     font: 'Impact',
            //     isDrag: false
            // },
        ]
    }
    gMeme = meme;

}

function addLine() {
    //string ''
    gMeme.selectedLineIdx = gMeme.lines.length;//?-1
    var x, y;
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx);
    // if (gMeme.selectedLineIdx === 0) {
    //     x = gElCanvas.width / 2;
    //     y = 50;

    // }
    if (gMeme.selectedLineIdx === 0) {
        // createMeme(gMeme.selectedImgId);
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
//problem deleting 0 before 1
function deleteLine() {
    if (gMeme.selectedLineIdx !== null) {
        //only one line - 0
        if (gMeme.lines.length === 1) {
            gMeme.lines.splice(gMeme.selectedLineIdx, 1);
            gMeme.selectedLineIdx = null;
            document.querySelector('.input-text').value = '';
        }
        else if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
            gMeme.lines.splice(gMeme.selectedLineIdx, 1);
            gMeme.selectedLineIdx = 0;
            // document.querySelector('.input-text').value = gMeme.lines[gMeme.selectedLineIdx].txt;
            // problem when deleting a line ant the old text left on the input
        }

        else {
            gMeme.lines.splice(gMeme.selectedLineIdx, 1);
            gMeme.selectedLineIdx = gMeme.selectedLineIdx++;
        }
    }
}
function fontIncrease() {
    if (gMeme.selectedLineIdx === null) return;
    var line = gMeme.lines[gMeme.selectedLineIdx];
    line.fontSize += 2;
}

function fontDecrease() {
    if (gMeme.selectedLineIdx === null) return;
    var line = gMeme.lines[gMeme.selectedLineIdx];
    line.fontSize -= 2;
}

function alignLeft() {
    if (gMeme.selectedLineIdx === null) return;
    gMeme.lines[gMeme.selectedLineIdx].align = 'left';
    gMeme.lines[gMeme.selectedLineIdx].x = 10;
}

function alignCenter() {
    if (gMeme.selectedLineIdx === null) return;
    gMeme.lines[gMeme.selectedLineIdx].align = 'center';
    gMeme.lines[gMeme.selectedLineIdx].x = gElCanvas.width / 2;
}

function alignRight() {
    if (gMeme.selectedLineIdx === null) return;
    gMeme.lines[gMeme.selectedLineIdx].align = 'right';
    gMeme.lines[gMeme.selectedLineIdx].x = gElCanvas.width - 10;
}

function changeFont(inputFont) {
    if (gMeme.selectedLineIdx === null) return;
    gMeme.lines[gMeme.selectedLineIdx].font = inputFont;
}

function changeStrokeFontColor(stkColor) {
    if (gMeme.selectedLineIdx === null) return;
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = stkColor;
}

function changeFontColor(fontColor) {
    if (gMeme.selectedLineIdx === null) return;
    gMeme.lines[gMeme.selectedLineIdx].color = fontColor;
}

