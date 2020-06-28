
//my data
var myName = 'Pias Rahman'; 
var myBirthDate = '22-06-1992';
var myEmail = 'golamrahman09@gmail.com';

 console.log (myName);
 console.log (myBirthDate);
 console.log (myEmail);

 //you can't use reserved word in java script
 //learning data type
 //it's better to use (camelCase) as your var name & end with ;
 //var data always accepted that is given in the lastone

 //type of data
 var word = 'world';
 var number = 123;
 var earthIsRound = true;
 var undefined;
 var nothing = null;

 console.log( typeof word);
 console.log( typeof number);
 console.log( typeof earthIsRound);
 console.log( typeof undefined);
 console.log( typeof nothing);

 //math in javascript

 var one = 1;
 var two = 2;
 var three = 3;

 console.log (one + two);
 console.log (two - two);
 console.log (one * two);
 console.log (one / two);
 console.log (two % one);

 var radius = 10;
 const pi = 3.14159;
 var areaOfTheCircle = pi * (radius*radius)
 console.log(areaOfTheCircle);

 //complecated thing in math
 var a = 4;
 a++; // a = a+1
 a--; //a = a-1
 console.log(a);

 var b = 5;
 var c = 6;
 b = c++;

 //b = c;
 //c = c + 1;

 console.log ("b =",b, "c =",c);

 var d = 5;
 var e = 6;
 d = ++e;

 //e = e+1
 //d = e

 console.log ("d =",d, "e =",e);

 var x = 5;
 x += 5;
 console.log(x);
 console.log (x + x)

 //if else learning sessoin

 if(3 < 5) {
     console.log ("yeah 5 is greater than 3");
 }
 var myNameNew = ('Pias Rahman');

 if (myNameNew === 'Pias Rahman') {
     console.log ('yeas my name found');
 } else {
     console.log ('no my name not found');
 }

 var myBreakFast = ("bread");

 if (myBreakFast === 'vegetables' ) {
     console.log ('i wil eat it')
 } else if (myBreakFast === 'egg') {
     console.log ('I will not eat it')
 } else {
     console.log ('i will not eat this')
 }


 var largeNumber = (99);
 if ( largeNumber == 99 ) {
     console.log ('i found my number');
 } else if ( largeNumber > 100) {
     console.log ('no this not my number');
 } else {
     console.log ('none of this is my number');
 }

 for( var a = 2; a < 10; a) {
     console.log ('continue'  + a );
     a += 2;
 }

 var a = 0;

 while ( a++ < 5) {
     console.log(a)
 }

 console.log ("\n reset \n")

 var a = 0;

 while ( ++a < 5){
    console.log(a)
}

var i = 1;

for ( i = 1; i < 10; i += 2) {
    console.log (i);
}*/


var n = 1;
var factorial = 1;
for ( a = n; a > 1; a-- ) {
    factorial *= 1;
}
console.log(factorial);










