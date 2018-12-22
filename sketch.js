function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    var sec = second();
    var min = minute();
    var h = hour();


    background(0, 0, 0, 20);
    textSize(12 + (mouseX / width)*72);
    textLeading((mouseX / width) * 64);
    textAlign(LEFT, BASELINE);

    if (h > 6) {
        fill(255, 255, 255, sec);
    } else {
        fill(91, 201, 246);
    }

    for (i = 0; i < h; i++) { // Stunden
        text(list.stundenText[h - 1].name, width/2, height/2.5, 70, 80);
    }

    for (i = 0; i < min; i++) { // Minuten
        text(list.minutenText[min - 1].name, width/2, height/2, 70, 80);
    }

    for (i = 0; i < sec; i++) { // Sekunden
        text(list.minutenText[sec - 1].name, mouseX, height/1.5, 70, 80);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
