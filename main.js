'use strict';

var gElImgPick = document.querySelector('.img-pick');
var gElEditor = document.querySelector('.editor-container');
var gElMemes = document.querySelector('.saved-memes');
var currImg;

function init() {
    renderImages();
    // initDragAndDrop();
}

function renderImages() {
    var elGrid = document.querySelector('.img-grid');
    var strHtml = '';
    var memes = getGMemes();
    memes.map((img) => {
        var str = `<img class="img-${img.id}" onclick="onLoadPng(${img.id})" src="${img.url}">`
        strHtml += str;
    }).join('');
    elGrid.innerHTML = strHtml;
}

function onLoadPng(img) {
    var elImg = document.querySelector(`.img-${img}`);
    currImg = elImg;
    gElImgPick.style.display = 'none';
    gElEditor.style.display = 'block';
    drawImg(elImg);
    drawText(img);
    drawSecondText();
    drawText3();
}

function onChangeText(ev) {
    ev.preventDefault();
    var elText = document.querySelector('input[name="txt"]');
    changeText(elText.value);
    renderCanvas();
    elText.value = '';
}

function draw(ev) {
    // console.log('ev:', ev)
}

function renderCanvas() {
    gCtx.fillStyle = "white"
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg(currImg);
    drawText(gCurrMemeId);
    drawSecondText();
    drawText3();
}

function onMoveUp() {
    moveUp();
    renderCanvas();
}

function onMoveDown() {
    moveDown();
    renderCanvas();
}

function onIncreaseFont() {
    increaseFont();
    renderCanvas();
}

function onDecreaseFont() {
    decreaseFont();
    renderCanvas();
}

function onSwitchLine() {
    // var elText = document.querySelector('input[name="txt"]');
    switchLine();
    renderCanvas();
}

function onMemesShow() {
    gElImgPick.style.display = 'none';
    gElMemes.style.display = 'block';
    gElEditor.style.display = 'none';
    renderSavedImg();
}

function onGalleryView() {
    gElMemes.style.display = 'none';
    gElImgPick.style.display = 'block';
}

function onDownloadCanvas(elLink) {
    downLoadCanvas(elLink);
}

function renderSavedImg() {
    var elSavedMemes = document.querySelector('.saved-memes-container');
    var dataURL = localStorage.getItem(MEMES_KEY);
    var img = new Image;
    img.src = dataURL;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
    };
    // gSavedMemes.push(img);
    var savedMemes = getGSavedMemes();
    savedMemes.map((img) => {
        return elSavedMemes.appendChild(img);
    })
}

function onTxtColorChange() {
    var elColor = document.querySelector('input[name="txt-color"]');
    changeTextColor(elColor.value);
    renderCanvas();
}

function onFontChange(font) {
    changeFont(font);
    renderCanvas();
}