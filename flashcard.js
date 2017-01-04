console.log("Complete Flashcard Constructor Module!");
//CONSTRUCTOR FUNCTION used to create flashcard objects for complete Q and A
var CompleteFlashcard = function (question, answer) {
    //increments through the items added to the complete flashcard array
    CompleteFlashcard.cardCount++;
    //phrase would return the blank portion on the text
    this.q = question;
    this.a = answer;
    this.ind = CompleteFlashcard.cardCount;
};
module.exports = CompleteFlashcard;