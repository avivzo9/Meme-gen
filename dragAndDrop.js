'use strict';

var gStartPos;
var gText;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function initDragAndDrop() {
    gText = drawText();
    addListeners();
    renderCanvas();
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
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('touchend', onUp);
}

function onDown(ev) {
    const pos = getEvPos(ev);
    if (!isCirlceClicked(pos)) return;
    gText.isDragging = true;
    gStartPos = pos;
    document.body.style.cursor = 'grabbing';

}

function onMove(ev) {
    if (gText.isDragging) {
        const pos = getEvPos(ev);
        const dx = pos.x - gStartPos.x;
        const dy = pos.y - gStartPos.y;

        gText.pos.x += dx;
        gText.pos.y += dy;

        gStartPos = pos;
        renderCanvas();
        renderText();
    }
}

function onUp() {
    gText.isDragging = false;
    document.body.style.cursor = 'grab';
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault();
        ev = ev.changedTouches[0];
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos;
}

function renderText() {
    const pos = gText
    drawText(pos.x, pos.y)

}