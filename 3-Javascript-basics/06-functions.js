//1 state it is a function  //2name said function 'hello'
function hello() {
    //3 function is excuted when it is call, as is it is not called so it will not print 'hello world'
    console.log("Hello World!");
}
//to call a functions, we state the name of said function followed by parenthesis: hello(); we can call it any number of times

hello(); //the above function has now been called.

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

//parameters and arguements
//parameters are the names listed in the function definition: 
//arguements are the real values recieved by the function when you call it.

function numberEntered(x){
    console.log("The number you entered was: ", x);
}
// x is the parameter

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);
//the numbers 1 through 5 are now arguements now that they have been called/stated

//lets try it using 2 parasms
function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);


//declaring the function
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
//calling the function
subtractTwoNumbers(5, 7)


//return statements
//When JS reaches a return statement it will stop executing that function. The return is the value that the function spits out.

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x; //10000 * 5 = 50000
    let myTaxes = myInc - y; //50000 - 50000 = 0
    let total = myTaxes + z;//0 + 0 = 0
    console.log(total); //will only print if this line is here
    return total; //once the function reached the 'return' point, it realizes this is an end point, and the return is the final answer. the return is the answer that a fuction spits out. the return value is returned out of the function
}
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);


function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");


function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Sansa", "Generic");

//write a function that calculates the totalPrice after tax on any quantity of any price on a product.

function totalPrice(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + price * quantity;
    console.log(totalPrice);
    return totalPrice

}
totalPrice(7, 50);
//taxes are 7%, so cost * 0.07 = cost of tax. 



