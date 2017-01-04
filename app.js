//Adding All Applicable Modules
//Cloze includes cards with blanks
var cloze = require('./clozeflashcard.js');
//Flashcard includes card with Q & A
var flashcard = require('./flashcard.js');
//Adds entries to each Flashcard
var add = require('./add.js');
//Save Flashcard to text file via fs
//DEPENDANCY FOR fs NPM PACKAGE
var fs = require('fs');
add.clozeFinished();
add.flashcardCompFinished();