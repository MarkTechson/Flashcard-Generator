console.log("Flashcard Module Entries Adding");
//Adds Information to Cards
//Cloze Flashcard 
exports.clozeFinished = function () {
    var flashcardsStored = [];
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
    var question1 = flashcardsStored[0].q;
    var question2 = flashcardsStored[1].q;
    var question3 = flashcardsStored[2].q;
    var question4 = flashcardsStored[3].q;
    console.log(question1);
    //could provide response to phrase using inquirer or form input on webpage to compare to flashcardsStored[i].a
    //example of providing a response in file
    flashcardsStored[0].response('Hogwarts');
    //This would evaluate to the else statement logging "Wrong Answer! The correct answer is Muggle"
};
exports.flashcardCompFinished = function () {
    //Regular Q & A Flashcard 
    var flashcardCompStored = [];
    BasicFlashcard.cardCount = 0;
    //Pushes a new complete flashcard entry from the constructor parameters into the complete card array
    flashcardCompStored.push(new CompleteFlashcard('Name the largest freshwater lake in the world?', 'Lake Superior'));
    flashcardCompStored.push(new CompleteFlashcard('Where would you find the Sea of Tranquility?', 'Moon'));
    flashcardCompStored.push(new CompleteFlashcard('Who was Henry VIIIs first wife?', 'Catherine of Aragon'));
    flashcardCompStored.push(new CompleteFlashcard('Which Shakespeare play features Shylock?', 'The Merchant of Venice'));
    //See that the items were added to the array
    console.log(flashcardCompStored);
};