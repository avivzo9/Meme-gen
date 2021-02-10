'use strict';


var gMemes;


var gElCanvas = document.querySelector('.canvas');
var gCtx = gElCanvas.getContext('2d');

var gKeywords = { 'happy': 5, 'dog': [2, 3], 'donald trump': 1, 'animal': [3, 4], 'baby': [3, 5], 'sarcastic': 6, 'crazy': 6 }

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['donald trump'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['dog', 'animal', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'animal'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'happy'] },
    { id: 6, url: 'img/6.jpg', keywords: ['carzy', 'sarcastic'] }
];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'Donald Trump',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'Cute dogs',
            size: 20,
            align: 'left',
            color: 'red'
        },




    ]
}

_createMemes()

function _getText() {

}

function _createMemes() {
    var memes = gImgs.map((img) => {
        return img;
    })
    gMemes = memes;
}

function drawImg(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function drawText(imgIdx) {
    gCtx.beginPath();
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.fill();
    gCtx.strokeStyle = 'black';
    gCtx.font = '40px IMPACT'
    gCtx.fillText(gMeme.lines[0].txt, 78, 50);
    gCtx.strokeText(gMeme.lines[0].txt, 78, 50);
}

function getElCanvas() {
    return gElCanvas;
}

function getGMemes() {
    return gMemes;
}

function getImgById(ImgId) {
    return gMemes.find((img) => {
        return ImgId === img.id;
    })
}