console.log("Blank Flashcard Module Connected!");
// module.exports = function ClozeFlashcard() {
//     this.text = '';
//     this.cloze = '';
//     //METHOD returns only the cloze-deleted portion of text
//     this.show = function () {};
// };
// var blank = [{
//     q: "____ is an object oriented programming language ",
//     a: "Javascript",
//     index: 0
// }, {
//     q: "blank"
// }];
//Array to story flashcard phrases and answers
flashcardsStored = [];
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
    }
}
BasicFlashcard.cardCount = 0;
//Pushes a new basic flashcard entry from the constructor parameters into the flashcardsStored array
flashcardsStored.push(new BasicFlashcard('____ is a word from Harry Potter now in the Oxford English Dictionary', 'Muggle'));
flashcardsStored.push(new BasicFlashcard('____ is the Hogwarts professor that teaches Transfiguration', 'Mcgonagall'));
flashcardsStored.push(new BasicFlashcard('____ first shows Harry the diary of Tom Riddle', 'Moaning Myrtle'));
flashcardsStored.push(new BasicFlashcard('____ current name of was Tom Marvolo Riddle', 'Voldemort'));
//See that the items were added to the array
console.log(flashcardsStored);
//This goes through each phrase in the array showing only the phrase with blank answer.
//Could also use inquirer to loop through each phrase in array and wait for response or make for loop with promise based upon user input of answer.
var question1 = flashcardsStored[0].q
var question2 = flashcardsStored[1].q
var question3 = flashcardsStored[2].q
var question4 = flashcardsStored[3].q
console.log(question1);
//could provide response to phrase using inquirer or form input on webpage to compare to flashcardsStored[i].a
//example of providing a response in file
flashcardsStored[0].response('Hogwarts');
//This would evaluate to the else statement logging "Wrong Answer! The correct answer is Muggle"
module exports = BasicFlashcard;