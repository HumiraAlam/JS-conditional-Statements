/*Problem 26: Nested If-Else + For Loop
Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", if a number is divisible by both 3 and 5, print "FizzBuzz".
Example:
For n = 5, print 1 2 Fizz 4 Buzz.
*/

for(n=1;n<=5;n++){
    if(n%3==0){
        console.log(n+" Fizz");
    }else if (n%5==0){
        console.log(n+" Buzz");
    }else if (n%3==0 && n%5==0){
        console.log(n+" FizzBuzz");
    }

}