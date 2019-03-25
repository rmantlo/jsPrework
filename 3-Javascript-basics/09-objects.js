//1                //2
var bobAlcorn = {
    //3                    //4
    name             : "Bob Alcorn",
    age              : 59,
    vocation        : "Chief Operating Officer",
    isRetired        : false
}; 
//1 objects are created using variables
//2 uses curly braces
//3 these are all properties of the object
//4 these are values of said properties

console.log(bobAlcorn); //1
console.log(bobAlcorn.name); //2
console.log(bobAlcorn.age); //3
// a . is an operator, like a +, and is used to get into an object, we use the . we get access into the object and select a property to look into and access their value.

console.log(bobAlcorn.middleName); //undefined bc this property does not exist


var blackBears = {
    environment: "Temporate",
    lifespan:"30 years",
    diet: "Omnivore",
    isendangered: false,
}

console.log(blackBears.lifespan);
console.log(blackBears.environment + " , " + blackBears.diet);


var experiment = {
    section1: "what" ,
    section2: "I" ,
    section3:"like" ,
}
console.log(experiment.section1);
//console.log(experiment.section1[1]); //this does not work, but is there a way to do it? probably with arrays
//didnt figure out arrays yet

var player = {
    username: "Michael Jordan" ,
    power: 22,
    toughness: 13,
}
console.log(player.username);

var movie = {
    genre: "horror",
    sequels: 0,
    awardwinning: false,
}
console.log(movie.awardwinning);

var friend = {
    funny: true,
    name: "Susan"
    age: 27,

}
console.log(friend.name);