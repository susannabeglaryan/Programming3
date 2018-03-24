function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(100);
            if (r < 20) r = 0;
            else if (r < 70) r = 1;
            else if (r < 85) r = 2;
            else if (r < 95) r = 3;
            else if (r < 100) r = 4;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [], xotakerArr = [], gishatichArr = [], xotakerGishatichArr = [];
var seasons = ["Winter", "Spring", "Summer", "Autumn"];
season = "";
var index = 3;


season = seasons[index];
setInterval(function () {
    if (index < 3) {
        index++;
    }
    else {
        index = 0;
    }
    season = seasons[index];
}, 5000);

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w, (side * h + 40));
    background("#acacac");
    frameRate(15);
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3))
            }
            else if (matrix[y][x] == 4) {
                xotakerGishatichArr.push(new XotakerGishatich(x * 1, y * 1, 4))
            }
        }
    }




}

function draw() {
    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            switch (season) {
                case "Winter":
                    if (matrix[y][x] == 0)
                        fill("#acacac");
                    else if (matrix[y][x] == 1)
                        fill("white");
                    else if (matrix[y][x] == 2)
                        fill("yellow");
                    else if (matrix[y][x] == 3)
                        fill("red");
                    else if (matrix[y][x] = 4)
                        fill("black");
                        break;
                case "Spring":
                    if (matrix[y][x] == 0)
                        fill("#acacac");
                    else if (matrix[y][x] == 1)
                        fill("#479447");
                    else if (matrix[y][x] == 2)
                        fill("yellow");
                    else if (matrix[y][x] == 3)
                        fill("red");
                    else if (matrix[y][x] = 4)
                        fill("black");
                        break;
                case "Summer":
                    if (matrix[y][x] == 0)
                        fill("#acacac");
                    else if (matrix[y][x] == 1)
                        fill("#207320");
                    else if (matrix[y][x] == 2)
                        fill("yellow");
                    else if (matrix[y][x] == 3)
                        fill("red");
                    else if (matrix[y][x] = 4)
                        fill("black");
                        break;
                case "Autumn":
                    if (matrix[y][x] == 0)
                        fill("#acacac");
                    else if (matrix[y][x] == 1)
                        fill("#ad6001");
                    else if (matrix[y][x] == 2)
                        fill("yellow");
                    else if (matrix[y][x] == 3)
                        fill("red");
                    else if (matrix[y][x] = 4)
                        fill("black");
                        break;
            }

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

    fill("black")
    textSize(32);
    text(season, 10, 750);

}