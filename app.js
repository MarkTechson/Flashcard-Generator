const cloze = require('./clozeflashcard.js');
const flashcard = require('./flashcard.js')
    //CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
};
//Save Flashcard to text file via fs
//DEPENDANCY FOR fs NPM PACKAGE
var fs = require('fs');
//Create a NEW object from constructor
var flashCard = new BasicFlashcard();
//tamagatchi, charactercreateconstructorsolution, rainingcatsanddogs-con, programmersloop-recursion
// modules used to hold each constructor, and a 3rd file used as a single entry point which exports both.
// ClozeCard has property or method that returns only the cloze-deleted portion of the text
// ClozeCard has property or method that returns only the partial text
// ClozeCard throws error if it is not able to figure out where the cloze-deletion should go.
// create a review script "front end (in node)" that is recursive and uses inquirer
// use promise for reading json from separate file along with any other async functions that may be needed