//loops allow us to continuely run a block of code until a condition is met
// what if we wanted to print a range from 1 to 100, individually writing it out would take forever, so we create a for loop:
    for (var i = 1; i < 101; i += 1){
        console.log(i);
    }

//the break down
        //1        //2    //3
        for ( var i = 1; i <= 10; i++){
            console.log("Number:", i);
        }
        //1 this is the starting point, the starting condition
        //2 this is the conditional section, the condition that is to be met (as long as i is less than or equal to 10, it will continue)
        //3 this is what happens with each loop until the condition is met, it will keep adding 1 to i as long as it is less than or equal to 10

// Write a loop that counts to 50 by 5s. Starts at 0. 
//Write a loop that starts at 20 and counts down to 1. It subtracts one each time.  
//Write a for loop that starts at 3, and increments by 5, but doesn't go over 30.
for ( var i = 0; i <= 50; i += 5){
    console.log(i);
}

for ( var a = 20; a > 1; a -= 1){
    console.log(a);
}

for ( var b = 3; b <= 30; b += 5){
    console.log(b);
}

for ( var i = 6; i <= 10; i += 2){
    console.log(i);
}

for ( var i = 25; i <= 100; i += 25){
    console.log(i);
}

for ( var i = 100; i >= 0; i -= 20){
    console.log(i);
}



function pacersWon(){
    console.log("Pacers won!");
}

for(var i = 0; i < 5; i++){
    pacersWon();
}
