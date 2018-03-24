class Grass extends KendaniEak {

    mul(speed) {
        console.log("mul method")
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }

    bazmanal() {
        switch (season) {
            case "Spring":
                this.mul(8);
                break;
            case "Summer":
                this.mul(6);
                break;
            case "Autumn":
                this.mul(4);
                break;    
            default:
                break;
        }
    }
}
