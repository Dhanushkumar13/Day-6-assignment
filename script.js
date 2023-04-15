//https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb
//Question 2
alert('I’m invoked!');

//Question 3
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working 
//this works as semicolon is not a mandatory thing to be present.The template literals just print the content as it is and the value sums up everything and displays the output

//Question 4
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"

//Question 5
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;
alert( `hello ${name}` );

// Question 6
let a = Number(prompt("First number?"));
let b = Number(prompt("Second number?"));
alert(a + b);

// Question 7
var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

// Question 8
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
//To trigger else statement leaving the prompt blank will achieve this.

// Question 9
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// Question 10
let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

//Question 11
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
 console.log(message)
}
else
{
 let message = "Go away";
 console.log(message)
}

// Question 12
let message;
let lock;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
  console.log(message);
}
else
{
 message = "welcome";
 console.log(message);
}

// Question 13
let message;
let lock;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

// Question 14
let i = 4;
while (i) {
  --i;
  if (i !== 0) {
    console.log(i);
  }
}

// Question 15
let num = 10
for(let i=1;i<=10;i++){
console.log(i)
}

// Question 16
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

// Question 17
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// Question 18
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("disarm the bomb");
  }
}

// Question 19
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);
//It displays only hi because lemein's value is in string and lemeout's value is null thats why it prints the message hi and not hello

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359
// Question 1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

// Question 2
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 if(i == numsArr.length-1){
 new_string += numsArr[i];
 }else{
 new_string += numsArr[i]+","
 }

}
 console.log(new_string);

//  Question 3
var new_string = " ";
 
for (var i = 11; i > 0; i -- ) {
 new_string += i + " "
 }
console.log(new_string);

// Question 4
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

// Question 5
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 1 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

// Question 6
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {

 sum += numsArr[i];
}
console.log(sum);

// Question 7
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i < numsArr.length; i++) {
 if(numsArr[i]%2==0){
    sum += numsArr[i]
 }
}
console.log(sum);

// Question 8
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <numsArr.length ; i++) {
 if(numsArr[i]%2 ==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

// Question 9
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++){
 console.log( numsArr[i])
}

// Question 10
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var Arr1= numsArr[0];
var Arr2= numsArr[1];
var combine = Arr1.concat(Arr2)
console.log(combine)

// Question 11
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ ){
      if(inner_array[j] %2 == 0 )
      {
         inner_array[j] = 'even';
       }
 }
}

console.log(numsArr);

// Question 12
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 1; i < numsArr.length; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- ) {
     console.log(inner_array[j]);
 }
}

// Question 13
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2 == 0)
 {
   sum_even += inner_array[j]

 }
 else
 {
    sum_odd += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d
// Question 1
var aa = (f,s,t) => {
  var f,s,t;
  if(f>s &&f>t){
  console.log(f)}
  else if(s>f && s>t){
  console.log(s)}
  else{
  console.log(t)}
 }
 aa(1,2,3);

//  Question 2
let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;
var digits=n.toString().split('');
for(var i=0;i<digits.length;i++){
 sum+=parseInt(digits[i]);
 }
 return sum;
}

// Question 3
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

// Question 4
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano();

// Question 5
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);