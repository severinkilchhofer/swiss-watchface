function setup() {
    createCanvas(windowWidth, windowHeight);//vollflaechig
}

function draw() {
    var sec = second();
    var min = minute();
    var h = hour();


    background(0, 0, 0);

    textSize(50);
    fill(255);


    for (i = 0; i < h; i++) { // Stunden
        text(list.stundenText[h - 1].name, 10, 10, 70, 80); // Text wraps within text box
    }

    for (i = 0; i < min; i++) { // Minuten
        text(list.minutenText[min - 1].name, 100, 100, 70, 80); // Text wraps within text box
    }

    for (i = 0; i < sec; i++) { // Sekunden
        text(list.minutenText[sec - 1].name, 200, 200, 70, 80); // Text wraps within text box
    }
}
