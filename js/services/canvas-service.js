var gElCanvas = document.getElementById('meme-canvas');
var gCtx = gElCanvas.getContext("2d");
var gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

//service

function isLineClicked(line, clickedPos) {
    var metrics = gCtx.measureText(line.txt);
    var textWidth = metrics.width + 15;
    var textHeigth = metrics.fontBoundingBoxAscent + 5;
    var x, y;
    if (line.align === 'left') {
        x = line.x - 10;
    }
    else if (line.align === 'right') {
        x = line.x - textWidth + 5;
    }
    else {
        x = line.x - (textWidth / 2);
    }
    y = line.y - textHeigth + 10;
    return ((clickedPos.x >= x && clickedPos.x <= x + textWidth) && (clickedPos.y <= y + textHeigth && clickedPos.y >= y));

}

function getClickedLine(clickedPos) {
    var clickedLine = null;
    if (gMeme.selectedLineIdx === null) return null;
    gMeme.lines.forEach(function (line, idx) {
        if (isLineClicked(line, clickedPos)) {
            clickedLine = idx;
            gMeme.selectedLineIdx = clickedLine;
        }
    });
    return clickedLine;
}

//service
function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag;
}
//service
function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].x += dx;
    gMeme.lines[gMeme.selectedLineIdx].y += dy;
}

function addListeners() {
    addMouseListeners();
    addTouchListeners();
    window.addEventListener('resize', () => {
        resizeCanvas();
        renderCanvas();
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    console.log('ev', ev);
    const pos = getEvPos(ev);

    // setClickedLine(pos);
    // if (!isLineClicked(pos)) return;
    if (getClickedLine(pos) === null) return;
    setLineDrag(true);
    gStartPos = pos;
    document.body.style.cursor = 'grabbing';
    //?
    renderCanvas();

}

function onMove(ev) {
    // const circle = getCircle();
    if (gMeme.selectedLineIdx === null) return;
    if (gMeme.lines[gMeme.selectedLineIdx].isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos
        moveLine(dx, dy)
        renderCanvas()
    }
}

function onUp() {
    setLineDrag(false);
    document.body.style.cursor = 'grab'
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.height = elContainer.offsetWidth;
    gElCanvas.width = elContainer.offsetWidth;
}


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL('image/jpeg');
    console.log('data', data);
    elLink.href = data;
    elLink.download = 'meme.jpg';
}


function drawRect() {
    if (gMeme.selectedLineIdx === null) return;
    var metrics = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt);
    var textWidth = metrics.width + 15;
    var textHeigth = metrics.fontBoundingBoxAscent + 5;//
    if (gMeme.lines[gMeme.selectedLineIdx].align === 'left') {
        var x = gMeme.lines[gMeme.selectedLineIdx].x - 10;
    }
    else if (gMeme.lines[gMeme.selectedLineIdx].align === 'right') {
        var x = gMeme.lines[gMeme.selectedLineIdx].x - textWidth + 5;
    }
    else {
        var x = gMeme.lines[gMeme.selectedLineIdx].x - (textWidth / 2);
    }
    var y = (gMeme.lines[gMeme.selectedLineIdx].y - textHeigth) + 10;
    gCtx.beginPath();
    gCtx.rect(x, y, textWidth, textHeigth);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function drawText(line) {
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.fontSize}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.x, line.y);
    gCtx.strokeText(line.txt, line.x, line.y);
}

function renderCanvas() {
    var img = new Image();
    var image = getImageById(gMeme.selectedImgId);
    img.src = image.url;
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        gMeme.lines.forEach(function (line) {
            drawText(line);
            drawRect();
        })
    }
}
