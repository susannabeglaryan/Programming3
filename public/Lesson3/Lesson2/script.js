socket = io.connect('http://localhost:3000');

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(100);
            if (r < 20) r = 0;
            else if (r < 70) r = 1;
            else if (r < 85) r = 2;
            else if (r < 92) r = 3;
            else if (r < 99.5) r = 4;
            else if (r < 100) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

function isEnded(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != matrix[0][0])
                return false;
        }
    }

    return true;
}

var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [], xotakerGishatichArr = [], hivandutyunArr = [];
var seasons = ["Winter", "Spring", "Summer", "Autumn"];
season = "";
var index;

var val = prompt("Enter seaason");
switch (val) {
    case "Spring":
        index = 1;
        break;
    case "Summer":
        index = 2;
        break;
    case "Autumn":
        index = 3;
        break;
    case "Winter":
        index = 0;
        break;
    default:
        index = 1;
        break;
}


season = seasons[index];
setInterval(function () {
    if (index < 3) {
        index++;
    }
    else {
        index = 0;
    }
    season = seasons[index];
}, 3000);

grassCount = 0, xotakerCount = 0, gishatichCount = 0, xotakerGishatichCount = 0, hivandutyunCount = 0;

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w, (side * h + 40));
    background("#acacac");
    frameRate(5);
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
                grassCount++;
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
                xotakerCount++;
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3));
                gishatichCount++;
            }
            else if (matrix[y][x] == 4) {
                xotakerGishatichArr.push(new XotakerGishatich(x * 1, y * 1, 4));
                xotakerGishatichCount++;
            }
            else if (matrix[y][x] == 5) {
                hivandutyunArr.push(new Hivandutyun(x * 1, y * 1, 5));
                hivandutyunCount++;
            }
        }
    }
}

function draw() {
    if (isEnded(matrix)) {
        background("#000000");
        textSize(32);
        if (matrix[0][0] == 0)
            text('The End', w * side / 2, h * side / 2);
        else if (matrix[0][0] = 1)
            text('Grasses won!', w * side / 2, h * side / 2);
        fill("#fff");
    } else {
        background("#acacac");
        for (var y in matrix) {
            for (var x in matrix[y]) {
                if (matrix[y][x] == 0)
                    fill("#acacac");
                else if (matrix[y][x] == 1) {
                    switch (season) {
                        case "Winter":
                            fill("white");
                            break;
                        case "Spring":
                            fill("#479447");
                            break;
                        case "Summer":
                            fill("#207320");
                            break;
                        case "Autumn":
                            fill("#ad6001");
                            break;
                    }
                }
                else if (matrix[y][x] == 2) {
                    for (let i = 0; i < xotakerArr.length; i++) {
                        if (xotakerArr[i].serArakan && xotakerArr[i].x == x && xotakerArr[i].y == y)
                            fill("#ffff00");
                        else if (!xotakerArr[i].serArakan && xotakerArr[i].x == x && xotakerArr[i].y == y)
                            fill("#ffff8d");
                    }
                }
                else if (matrix[y][x] == 3) {
                    for (let i = 0; i < gishatichArr.length; i++) {
                        if (gishatichArr[i].serArakan && gishatichArr[i].x == x && gishatichArr[i].y == y)
                            fill("#ff0000");
                        else if (!gishatichArr[i].serArakan && gishatichArr[i].x == x && gishatichArr[i].y == y)
                            fill("#fd5656");
                    }
                }
                else if (matrix[y][x] == 4) {
                    for (let i = 0; i < xotakerGishatichArr.length; i++) {
                        if (xotakerGishatichArr[i].serArakan && xotakerGishatichArr[i].x == x && xotakerGishatichArr[i].y == y)
                            fill("#000000");
                        else if (!xotakerGishatichArr[i].serArakan && xotakerGishatichArr[i].x == x && xotakerGishatichArr[i].y == y)
                            fill("#272727");
                    }
                }
                else if (matrix[y][x] == 5)
                    fill("#0000ff");


                rect(x * side, y * side, side, side);
            }
        }

        for (var i in grassArr) {
            grassArr[i].bazmanal();
        }

        for (var i in xotakerArr) {
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }

        for (var i in gishatichArr) {
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].mahanal();
        }

        for (var i in xotakerGishatichArr) {
            xotakerGishatichArr[i].bazmanal();
            xotakerGishatichArr[i].utelXot();
            xotakerGishatichArr[i].utelXotaker();
            xotakerGishatichArr[i].mahanal();
        }

        for (var i in hivandutyunArr) {
            hivandutyunArr[i].bazmanal();
            hivandutyunArr[i].mahanal();
        }

        fill("black")
        textSize(32);
        text(season, 10, 750);

        var statistics = {
            "Grass Count": grassCount,
        }

        if (frameCount % 60 == 0) {
            socket.emit("send statistics", JSON.stringify(statistics));
        }
    }

}