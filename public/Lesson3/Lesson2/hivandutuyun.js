class Hivandutyun extends KendaniEak {
    mul(speed) {
        var vand = random(this.yntrelVandak(2));
        if (vand) {
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 5;
        }
        else this.mahanal();
    }

    bazmanal() {
        switch (season) {
            case "Spring":
                this.mul(18);
                break;
            case "Summer":
                this.mul(15);
                break;
            case "Autumn":
                this.mul(10);
                break;
            case "Winter":
                this.mul(8);
                break;
        }
    }

    mah() {
        matrix[this.y][this.x] = 0;
        for (var i in hivandutyunArr) {
            if (hivandutyunArr[i].x == this.x && hivandutyunArr[i].y == this.y) {
                hivandutyunArr.splice(i, 1);
            }
        }
    }

    mahanal() {
        setTimeout(this.mah(), 3000);
    }
}