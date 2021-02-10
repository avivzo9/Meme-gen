'use strict';

var gImgPick = document.querySelector('.img-pick')
var gEditor = document.querySelector('.editor-container')

function init() {
    renderImg();
}

function renderImg() {
    var elGrid = document.querySelector('.img-grid');
    var strHtml = '';
    var memes = getGMemes()
    var newStr = memes.map((img) => {
        var str = `<img class="img-${img.id}" onclick="onLoadPng(${img.id})" src="${img.url}">`
        strHtml += str;
    }).join('');
    elGrid.innerHTML = strHtml;
}

function onLoadPng(img) {
    console.log('img:', img)
    var elImg = document.querySelector(`.img-${img}`)
    gImgPick.style.display = 'none';
    gEditor.style.display = 'block';
    drawImg(elImg);
    drawText(img);
}

function onDrawText(ev) {
    ev.preventDefault();
    var elText = document.querySelector('input[name="txt"]');
    // drawText(elText.value);
}

function draw(ev) {
    console.log('ev:', ev)

}