//QUESTION NO 1

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

var sum = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;


document.write("First Number: " + num1 + "<br>");
document.write("Second Number: " + num2 + "<br><br>");

document.write("Sum = " + sum + "<br>");
document.write("Subtraction = " + subtract + "<br>");
document.write("Multiplication = " + multiply + "<br>");
document.write("Division = " + divide + "<br>");


//question no 2



var num = Number(prompt("Enter a number"));

if (num % 2 == 0) {
    document.write(num + " is Even Number");
} else {
    document.write(num + " is Odd Number");
}





//Question no 3

let age = Number(prompt("Enter your age"))
if (age >= 18) {console.log("Eligible for voting");}
else{console.log("Not eligible for voting")}



//Question no 4

let arr = [10,20,30,40,50];
let sum = 0;
for( let i = 0; i < 5; i++){sum = sum + arr[i;]}
console.log("Total sum:", sum);


//question no 5

let str = prompt("Enter a string:");
let rev = "";
 for(let i = str.length - 1; i >=0; i--){
    rev = rev + str[i];}

    if(str == rev){console.log("It is a palindrome")};
    else{console.log("It is not a palindrome")}


    

    //Question no 6 

    fuction findLargest(X,y,z){return x;

    }
    else if(x >= y && x >= z){
        return y;
    }
    else{ return z;}

    let result = findLargest(12, 45, 23);
    console.log("Largest number is ;", result)






    //Question no 7

    for(let i = 1; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }





    //Question no 8

    let n = Number(prompt("Enter a number;"))
    let fact = 1;

    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    console.log("Factorial is:", fact)






    //question no 9 


    let names = ["aman", "mudassir","satti","muzammil"]
    for(let i = 4; i >= 0; i--){
        console.log(names[i]);
    }

 