//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
};
//CONSTRUCTOR FUNCTION used to create flashcard objects
var BasicFlashcard = function() {
    this.front = '';
    this.back = '';
    //METHOD 
    this.action = function() {
        if (this.front === 'George Washington') {
            console.log("Wow, George");
        } else {
            console.log("Bad Try.");
        }
    };

var ClozeFlashcard = function () {
    this.text = '';
    this.cloze = '';
    //METHOD returns only the cloze-deleted portion of text
    this.show = function() {
      
    };
}

//Save Flashcard to text file via fs
//DEPENDANCY FOR fs NPM PACKAGE
var fs = require('fs');

//Create a NEW object from constructor
var flashCard = new BasicFlashcard();
//tamagatchi, charactercreateconstructorsolution, rainingcatsanddogs-con, programmersloop-recursion