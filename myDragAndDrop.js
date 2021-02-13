'use strict';


function draw(ev) {
    var pos;
    console.clear();
    var canvas = getElCanvas();
    pos = {
        x: ev.offsetX + ev.clientX,
        y: ev.offsetY
    }
    gMeme.lines[gLine].x = pos.x
    gMeme.lines[gLine].y = pos.y
    renderCanvas();
    console.log('ev:', ev)
}