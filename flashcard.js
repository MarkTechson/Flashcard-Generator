console.log("Flashcard Module Connected!");
//CONSTRUCTOR FUNCTION used to create flashcard objects NOT CERTAIN ABOUT SYNTAX
module.exports = function BasicFlashcard() {
    this.front = '';
    this.back = '';
    //METHOD 
    this.action = function () {
        if (this.front === 'George Washington') {
            console.log("Wow, George");
        } else {
            console.log("Bad Try.");
        }
    };
};
var BasicFlashcard = function (phrase, answer) {
    BasicFlashcard.cardCount++;
    this.p = phrase;
    this.a = answer;
    this.ind = BasicFlashcard.cardCount;
    this.response = function (res) {
        if (res.toLowerCase() === this.a.toLowerCase()) {
            console.log("Your response is correct!");
        } else {
            console.log("Wrong Answer!");
        }
    }
}
BasicFlashcard.cardCount = 0;
module exports = BasicFlashcard;