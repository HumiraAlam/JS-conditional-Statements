/*
For Loop + Nested If-Else Statement
Print all numbers from -n to n using a for loop and check if each number is positive, negative, or zero using nested if-else statements.
Example:
For n = 5, print 1 2 3 4 5.

*/

for(n=-1;n<=5;n++){
    if(n>0){
        console.log(n+" is positive")
    }else if(n<0) {
        console.log(n+" is negetive")
    }else{
        console.log("zero")
    }

}