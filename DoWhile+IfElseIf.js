/*
Problem 19: Do While Loop + If-Else-If Statement

Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.

*/

let n=-1;
do{
    if(n>0){
        console.log(n+" is Positive")
    }else if(n<0){
        console.log(n+" is Negetive")
    }else{
        console.log("zero")
    }
    n++
}
while(n<=5);


