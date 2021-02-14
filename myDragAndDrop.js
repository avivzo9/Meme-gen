'use strict';

var canvas;
var ctx;
var text;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];

initDrag();

function initDrag() {
    canvas = getElCanvas();
    ctx = getGCtx();
    resizeCanvas();
    text = getGMeme();
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
    console.log('whoo');
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

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        t: ev.offsetY
    }

}