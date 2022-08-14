class GuessingGame {
    constructor() { }



setRange(min, max) {
    this.left = min;
    this.right = max;
}

guess() {
 this.target =  Math.round((this.right-this.left)/2) + this.left;
 return this.target;
}

lower() {
this.right = this.target;
}

greater() {
this.left = this.target;
}
}

module.exports = GuessingGame;
