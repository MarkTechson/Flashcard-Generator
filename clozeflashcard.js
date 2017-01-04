console.log("Blank Flashcard Constructor Module!");
//Cloze Flashcard Constructor
var BasicFlashcard = function (phrase, answer) {
    //increments through the items added to the flashcard array
    BasicFlashcard.cardCount++;
    //phrase would return the blank portion on the text
    this.p = phrase;
    this.a = answer;
    this.ind = BasicFlashcard.cardCount;
    //compares response to answer to check for correct answer
    this.response = function (res) {
        if (res.toLowerCase() === this.a.toLowerCase()) {
            console.log("Your response is correct!");
        } else {
            console.log("Wrong Answer! The correct answer is " + this.a);
        }
    };
};
module.exports = BasicFlashcard;