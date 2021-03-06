function Pet() {
    this.name = 'Fido';
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;

    function growUp() {
        this.growUp = function() {
            this.age += 1;
            this.hunger += 5;
            this.fitness -= 3;

        }
    }
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    }
}


Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= 0) {
        this.hunger -= 3;
    } else {
        this.hunger = 0;
    }
}




module.exports = Pet;