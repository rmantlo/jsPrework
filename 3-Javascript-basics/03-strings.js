console.log("I was born in Indianapolis."); //"I was born in Indianapolis" is a string
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");


var tweet = "Lebron is king! Westbrook for president!";
var facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
var username = 'jamespauloconnor';


var password = "123456789HELLO";
var birthDay = "August 11"; //numbers in strings act as text, so you cant use them for math


var birthCity = "Indianapolis ";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState);

var realBirthCity = "Jersey City";
var realBirthState = "New Jersey";
console.log(realBirthCity + " , " + realBirthState);


//we can mix strings and integers together
var ageInAugust = 40; 
var highSchool = "Bill Murray High School";
var graduatedHighSchool = 1994;

console.log(highSchool + " , " + graduatedHighSchool);
console.log("My age in August:", ageInAugust);



var gradYear = 1994;
var highSchool = "Bill Murray High School";

console.log("I graduated from " + highSchool + " in " + gradYear + ".");


//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(10)); // cuts off everything before the nth index
