'use strict';

var gImgPick = document.querySelector('.img-pick')
var gEditor = document.querySelector('.editor-container')
var currImg;

function init() {
    renderImages();
}

function renderImages() {
    var elGrid = document.querySelector('.img-grid');
    var strHtml = '';
    var memes = getGMemes()
    memes.map((img) => {
        var str = `<img class="img-${img.id}" onclick="onLoadPng(${img.id})" src="${img.url}">`
        strHtml += str;
    }).join('');
    elGrid.innerHTML = strHtml;
}

function onLoadPng(img) {
    var elImg = document.querySelector(`.img-${img}`);
    currImg = elImg;
    gImgPick.style.display = 'none';
    gEditor.style.display = 'block';
    drawImg(elImg);
    drawText(img);
}

function onDrawText(ev) {
    ev.preventDefault();
    var elText = document.querySelector('input[name="txt"]');
    changeText(elText.value);
    renderCanvas();
}

function draw(ev) {
    console.log('ev:', ev)
}

function renderCanvas() {
    gCtx.fillStyle = "white"
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg(currImg);
    drawText(gCurrMemeId);
}