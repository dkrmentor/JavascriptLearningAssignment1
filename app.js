// --------------- chapter # 1 ---------------
////Q1
// alert("Welcome to our website");
////Q2
// alert("Error! Please enter a valid password.");
////Q3
// alert("Welcome to JS Land... \nHappy Coding!");
////Q4
// alert("Welcome to JS Land...");
// alert("Happy Coding!")
////Q5
// in console.log
// alert ("Hello... I can run JS through my web browser consol");
////Q6
// alert("Dhara");
////Q7
//done
// --------------- chapter # 2 ---------------
////Q1
// var username;
////Q2
// var myName ="Dhara Rajput";
////Q3-a
// var message;
////Q3-b
// var message = "Hello World";
////Q3-c
// alert(message);
// //Q4
// var name = "Dhara"
// var age = 22;
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age+ " year old");
// alert(course);
// //Q5
// var a = "PIZZA"
// alert(a.slice(0,5) + "\n" + a.slice(0,4) + "\n" +a.slice(0,3) + "\n" + a.slice(0,2) + "\n" + a.slice(0,1)  )
// //Q6
// var email = "dhara@gmail.com";
// alert("My email address is "+ email );
// //Q7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book. "+book);
// //Q8
// document.write("Yah ! I can write HTML content through JavaScript");
// //Q9
// var sign = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(sign);
// --------------- chapter # 3 ---------------
// //Q1
// var age = 22;
// alert("I am " +age+ " years old. " );
// //Q2
// var visits = 14;
// alert("You have visited this site " + visits + " times");
// //Q3
// var birthYear = 1999;
// document.write("My birth year is"+birthYear +"<br> Data type of my declared variable is number <br>" )
// //Q4
// var Visitor = " <b> John Doe </b>";
// var Product = "<b> T-shirt</b>";
// var Quantity = "<b> 5 </b>";
// document.write(Visitor+" ordered " +Quantity+ " "+  Product + "(s) on XYZ Clothing store <br>")
// ---------- chapter # 4 ---------------
// //Q1
// var a,b,c;
// // Q2
// var a,b,c,d,e, 1a, ?a, 2a, 4a , 3a ;
// //Q3
// document.write(" <b> Rules for naming JS variables </b> <br> <br>  <br> Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable <br> Variables must begin with a ______, ______ or_____. For example $name, _name or name <br> Variable names are case _________ <br> Variable names should not be JS _________ <br>");
// ---------- chapter # 5 ---------------
// //Q1
// var a = 3;
// var b = 5;
// document.write("Sum of "+a+" and "+b+ " is " +(a+b) + "<br>");
// //Q2
// var a = 3;
// var b = 5;
// document.write("Sub of "+a+" and "+b+ " is " +(a-b) + "<br>");
// var a = 3;
// var b = 5;
// document.write("Mul of "+a+" and "+b+ " is " +(a*b) + "<br>");
// var a = 3;
// var b = 5;
// document.write("Div of "+a+" and "+b+ " is " +(a/b) + "<br>");
// var a = 3;
// var b = 5;
// document.write("Mod of "+a+" and "+b+ " is " +(a%b) + "<br>");
// //Q3
// var a;
// document.write("Value after variable declaration is: "+a+ "<br>" );
// a=5;
// document.write("Initial value:" +a+ "<br>");
// a++;
// document.write("Value after increment is: "+a+ "<br>");
// a=a+7;
// document.write( "Value after addition is:"+a+ "<br>");
// a=--a;
// document.write( "Value after decrement is: "+a+ "<br>");
// a=a%3;
// document.write( "The remainder is : "+a+ "<br>" );
// //Q4
// var ticket = 600;
// document.write("Total cost to buy 5 ticket to a movie is " +ticket*5+ "PKR <br>");
// //Q5
// var t=4;
// document.write("<b>Table of "+t+ "</b> <br>")
// for (var i = 1; i <= 10; i++) {
//     document.write( t + " * " + i + " = " + t*i + "<br>");
// }
// //Q6
// var c = 25;
// document.write(c + "&#8451; is " + ((25 * 9 / 5) + 32) + "&#8457 <br>")
// var f = 70;
// document.write(f + "&#8457; is " + ((f - 32) * 5 / 9) + "&#8451 <br>")
// //Q7
// var item1 = 650;
// var item2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var charges = 100;
// document.write("Price of item 1 is " + item1 + "<br> Quantity of item 1 is " + quantity1 + "<br> Price of item 2 is " + item2 + "<br> Quantity of item 2 is " + quantity2 + "<br> Shipping charges " + charges + "<br> <br> Total Cost of order is " + (item1 * quantity1 + item2 * quantity2 + charges) + " <br>");
// //Q8
// var tmarks = 980;
// var omarks = 804;
// document.write("Total marks: " + tmarks + "<br> Marks obtained: " + omarks + "<br> Percentage: " + (omarks / tmarks) * 100 + "<br>")
// //Q9
// var dollarAmount= 104.80 ;
// var riyalAmount = 28;
// dollarAmount = dollarAmount * 10;
// riyalAmount = riyalAmount * 25;
// document.write( "<h1> Currency in PKR</h1> " )
// document.write("Total Currency in PKR: "+(dollarAmount+riyalAmount)+"<br>")
// //Q10
// var a = 2;
// document.write(a + 5 * 10 / 2 + "<br>");
// //Q11
// var cyear = 2021;
// var byear = 1999;
// document.write("Current Year: "+cyear+"<br>")
// document.write("Birth Year: "+byear+"<br>")
// document.write("They are either " + (cyear - byear - 1) + " or " + (cyear - byear) + " years old <br>")
// //Q12
// var radius = 20;
// var pie = 3.142;
// document.write("Radius of a circle: " + radius + "<br>")
// document.write("The circumference is " + (2 * pie * radius) + "<br>")
// document.write("The area is " + (pie * radius * radius) + "<br>")
// //Q13
// var snack = "chocolate chip";
// var cage = 15;
// var mage = 65;
// var snackAmount = 3;
// document.write("You will need "+ ((mage-cage)*snackAmount) +" to last you until the ripe old age of "+mage +"<br>")


// ---------- chapter # 6-9 ---------------
// //Q1
// document.write("Result: <br>")
// var a = 10;
// document.write("The value of a is" + a + "<br> ")
// document.write("--------------------------------- <br> <br>")
// document.write("The value of ++a is: " + (++a) + "<br>")
// document.write("Now the value of a is: " + a + "<br> <br> <br>")
// document.write("The value of a++ is: " + (a++) + "<br>")
// document.write("Now the value of a is: " + a + "<br> <br> <br>")
// document.write("The value of --a is: " + (--a) + "<br>")
// document.write("Now the value of a is: " + a + "<br> <br> <br>")
// document.write("The value of a-- is: " + (a--) + "<br>")
// document.write("Now the value of a is: " + a + "<br> <br> <br>")
// //Q2
// var a = 2, b = 1;
// //1 - 0 + 1 + 1
// var result = --a - --b + ++b + b--;
// document.write("a is "+ a +"<br>")
// document.write("b is "+ b +"<br>")
// document.write("result is "+ result +"<br>")
// //Q3
// var name = prompt("Whats Your Name ?","My name is: ");
// alert("Welcome "+name);
// //Q5
// var t = +prompt("Enter the number");
// if (t == "") {
//     t =5;
//     document.write("<b>Table of " + t + "</b> <br>")
//     for (var i = 1; i <= 10; i++) {
//         document.write(t + " * " + i + " = " + t * i + "<br>");
//     }
// }
// else {
//     document.write("<b>Table of " + t + "</b> <br>")
//     for (var i = 1; i <= 10; i++) {
//         document.write(t + " * " + i + " = " + t * i + "<br>");
//     }
// }
// //Q6
// var sub1 = prompt("Enter the name of first subject");
// var sub2 = prompt("Enter the name of second subject");
// var sub3 = prompt("Enter the name of third subject");
// var tmarks = 100;
// var subMark1 = +prompt("Enter the marks of " + sub1 + " subject");
// var subMark2 = +prompt("Enter the marks of " + sub2 + " subject");
// var subMark3 = +prompt("Enter the marks of " + sub3 + " subject");
// var p1 = (subMark1 / tmarks * 100);
// var p2 = (subMark2 / tmarks * 100);
// var p3 = (subMark3 / tmarks * 100);
// document.write("<table><tr><th>Subject</th><th>Total Marks</th ><th>Obtained Marks</th><th>Percentage</th></tr> <br> <tr><td>" + sub1 + "</td><td>" + tmarks + "</td ><td>" + subMark1 + "</td><td>" + p1 + "%</td></tr><br> <br> <tr><td>" + sub2 + "</td><td>" + tmarks + "</td ><td>" + subMark2 + "</td><td>" + p2 + "%</td></tr><br><br> <tr><td>" + sub3 + "</td><td>" + tmarks + "</td ><td>" + subMark3 + "</td><td>" + p3 + "%</td></tr><br><br> <tr><th>" + "  " + "</th><th>" + (tmarks * 3) + "</th ><th>" + (subMark1 + subMark2 + subMark3) + "</th><th>" + ((p1 + p2 + p3) / 3) + "%</th></tr> <br></table>")


// ---------- chapter # 9-11 ---------------
// //Q1
// var city = prompt("City name: ");
// if (city === "karachi"){
//     document.write("Welcome to the city of light <br>");
// }
// //Q2
// var gender = prompt("Gender: ");
// if (gender === "male"){
//     document.write("Good Morning Sir <br>");
// }
// else if (gender === "female"){
//     document.write("Good Morning Ma'am <br>");
// }
// //Q3
// var sc = prompt("Enter Signal Color: ");
// if (sc === "red"){
//     document.write("Message: Must Stop <br>");
// }
// else if (sc === "yellow"){
//     document.write("Message: Ready to move <br>");
// }
// else if (sc === "green"){
//     document.write("Message: Move now <br>");
// }
// //Q4
// var fuel = +prompt("Remaining fuel: ")
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car <br>")
// }
// //Q5
// //a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //true
// //b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //false (post increment)
// //c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// //true
// //d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //true
// //e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// //true
// //f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// //true  
// //Q6
// var subMark1 = +prompt("Enter the marks of your subject 1");
// var subMark2 = +prompt("Enter the marks of your subject 2");
// var subMark3 = +prompt("Enter the marks of your subject 3");
// var tMarks = +prompt("Enter the total marks of your subjects");
// document.write(" <h1> Marksheet </h1> <br> <br>")
// document.write("Total Marks : "+tMarks+ "<br> ");
// var marksObt = (subMark1+subMark2+subMark3);
// document.write("Marks Obtained : "+marksObt+ "<br>");
// var per = marksObt / tMarks * 100 ;
// document.write("Percentage: "+per+"% <br>");
// if( per >= 80 ){
//     document.write("Grade : A1 <br> Remarks : Excellent <br>");
// }
// else if( per >= 70 ){
//     document.write("Grade : A <br> Remarks : Good <br>");
// }
// else if( per >= 60 ){
//     document.write("Grade : B <br> Remarks : You need to improve <br>");
// }
// else if( per < 60 ){
//     document.write("Grade : Fail <br> Remarks : Sorry <br>");
// }
// //Q7
// var num = 5;
// var guess = +prompt("Enter Number: ");
// if(guess === num){
//     document.write("Bingo! Correct answer <br>")
// }
// else if (guess === num+1){
//     document.write("Close enough to the correct answer <br>")
// }
// //Q8
// var num = 3;
// if (num%3 === 0){
//     document.write("number is divisible by 3 <br>")
// }
// //Q9
// var num = 5;
// if (num % 2 === 0) {
//     document.write("Even number <br>")
// }
// else {
//     document.write("odd number <br>")
// }
// //Q10
// var temp = +prompt("Enter Temperature: ")
// if (temp > 40){
//     document.write("It is too hot outside. <br>");
// }
// else if (temp <= 40 && temp > 30 ){
//     document.write("The Weather today is Normal. <br>");
// }
// else if (temp <= 30 && temp > 20){
//     document.write("Today’s Weather is cool. <br>");
// }
// else if (temp <= 20 && temp > 10){
//     document.write("OMG! Today’s weather is so Cool. <br>");
// }
// //Q11
// var fNum = +prompt("Enter First Number");
// var sNum = +prompt("Enter Second Number");
// var op = prompt("Enter Operator");
// if (op === '+') {
//     document.write("Addition of " + fNum + " and " + sNum + " is " + (fNum + sNum) + "<br>");
// }
// else if (op === '-') {
//     document.write("Subtraction of " + fNum + " and " + sNum + " is " + (fNum - sNum) + "<br>");
// }
// else if (op === '*') {
//     document.write("Multiplication of " + fNum + " and " + sNum + " is " + (fNum * sNum) + "<br>");
// }
// else if (op === '/') {

//     document.write("Division of " + fNum + " and " + sNum + " is " + (fNum / sNum) + "<br>");
// }
// else if (op === '%') {

//     document.write("Modulus of " + fNum + " and " + sNum + " is " + (fNum % sNum) + "<br>");
// }


// ---------- chapter # 12-13 ---------------
// //Q1
// var letter = prompt("Enter your character");
// letter= letter.slice(0,1);
// document.write(letter + "<br>");
// var ch = letter.charCodeAt(0);
// if (ch >= 65 && ch <= 90) {
//     document.write("capital  <br>")
// }
// else if (ch >= 97 && ch <= 122) {
//     document.write("small  <br>")
// }
// else if (ch >= 48 && ch <= 57) {
//     document.write("number  <br>")
// }

// //Q2
// var a = +prompt("Enter First Integer");
// var b = +prompt("Enter Second Integer");
// if (a > b) {
//     document.write(a+"<br>" )
// }
// else if (a < b) {
//     document.write(b+" <br>")
// }
// else if (a = b) {
//     document.write("a is equal to b <br>")
// }
// //Q3
// var a = +prompt("Enter the number");

// if (a === 0){
//     document.write("The number is Zero")
// }
// else if (a > 0){
//    document.write("Positive Number") 
// }
// else if (a < 0){
//     document.write("Negative Number")
// }
// //Q4
// var a = prompt("Enter your character");
// a = a.slice(0,1);
// document.write(a + "<br>")
// var vowel = ["a", "e", "i", "o", "u"];
// if (a == vowel[0] || a == vowel[1] || a == vowel[2] || a == vowel[3] || a == vowel[4]) {
//     document.write("vowel <br>");
// }
// else {
//     document.write("false <br>")
// }
// //Q5
// var password = "dhara";
// var p = prompt("Enter Password?")
// if (p === "") {
//     document.write("Enter Your Password <br>")
// }
// else {
//     if (p === password){
//         document.write("“Correct! The password you entered matches the original password <br>")    
//     }
//     else{
//         document.write("Incorrect password <br>")
//     }
// }
// //Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     document.write("greeting = Good day")
// }
// else {
//     document.write("greeting = Good day")
// }
// //Q7
// var h = +prompt("Enter the time  -> format (00 to 24)")
// if (h < 12 && h >= 00) {
//     document.write("Good Morning TIME: " + h + ".00 <br>")
// }
// else if (h < 17 && h >= 12) {
//     document.write("Good Afternoon TIME: " + h + ".00 <br>")
// }
// else if (h < 21 && h >= 17) {
//     document.write("Good Evening TIME: " + h + ".00 <br>")
// }
// else if (h < 24 && h >= 21) {
//     document.write("Good Night TIME: " + h + ".00 <br>")
// }
// // //Q7 --> jugaar
// var h = +prompt("Enter the time  -> format (00 to 24)")
// if (h < 12 && h >= 00) {
//     document.write("Good Morning <br> TIME: " + h + ".O'Clock <br>")
// }
// else if (h < 17 && h >= 12) {
//     document.write("Good Afternoon <br> TIME: " + h + ".O'Clock  <br>")
// }
// else if (h < 21 && h >= 17) {
//     document.write("Good Evening <br> TIME: " + h + " O'Clock  <br>")
// }
// else if (h < 24 && h >= 21) {
//     document.write("Good Night <br> TIME: " + h + ". O'Clock <br>")
// }
// if (h >= 00 && h < 12 ) {
//     document.write(h + "am <br>")
// }
// else if(h == 12){
//     document.write(h+ "pm <br>")
// }
// else if (h >= 13 && h < 24) {
//     h = h - 12;
//     document.write(h + "pm <br>")
// }
// else if(h == 24){
//     h=h-12
//     document.write(h+"am <br>")
// }

// ---------- chapter # 14-16 ---------------
// //Q1
// var stuName =[""]
// //Q2
// var stuName =[""]
// //Q3
// var stuName =["dhara"]
// //Q4
// var stuMarks =[123]
// //Q5 --> by faizan
// var best = [Boolean(100), Boolean(3.14), Boolean(-15), Boolean("Hello"), Boolean('false'), Boolean(7 * 0)]
// document.write("100 is" + best[0] + "<br>" +
//     "3.14 is " + best[1] + "<br>" +
//     "-15 is " + best[2] + "<br>" +
//     "Any (not empty) string is " + best[3] + "<br>" +
//     "Even the string 'false' is " + best[4] + "<br>" +
//     "Any expression (except zero) is " + best[5] + "<br>");
// //Q6
// var mix = ["","dhara",123,Boolean(100)]
// document.write(mix);
// //Q7
// var edu = ["SSC", 'HSC', "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<b> Qualifications: </b> <br> <br>")
// for(var i =0 ; i<edu.length ; i++){
//     document.write((i+1) + ")" +edu[i] + "<br>" )
// }
// //Q8
// var stu = ["stu1", "stu2", "stu3"]
// var marks = [320, 230, 480]
// var tmarks = 500;
// for (var i = 0; i < 3; i++) {
//     document.write("Score of " + stu[i] + " is " + marks[i] + ". Percentage " + ((marks[i] / tmarks) * 100) + "% <br>")
// }
// //Q9
// var color = ["red","yellow","green","blue","violet"]
// document.write(color+"<br>")
// //a
// var addColor = prompt("What color you wants to add to the beginning")
// color.unshift(addColor);
// document.write(color+"<br>")
// //b
// var addColor = prompt("What color you wants to add to the end")
// color.push(addColor);
// document.write(color+"<br>")
// //c
// color.unshift("brown","cyan");
// document.write(color+"<br>")
// //d
// color.shift();
// document.write(color+"<br>")
// //e
// color.pop();
// document.write(color+"<br>")
// //f
// var indColor = +prompt("At which index you wants to add a color")
// var ColorName = prompt("What color you wants to add to the end")
// color.splice(indColor,0,ColorName)
// document.write(color+"<br>")
// //g
// var indColor = +prompt("At which index you wants to delete a color")
// color.splice(indColor,1)
// document.write(color+"<br>")
// //Q10
// var scores = [320,230,480,120]
// document.write("Scores of students: " +scores)
// document.write("Ordered Scores of students: " +scores.sort() + "<br>")
// //Q11
// var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCities = cityNames.slice(2,4)
// document.write("Cities list: <br> " + cityNames+ "<br> <br>")
// document.write("Selected Cities list: <br> " +selectedCities + "<br>")
// //Q12
// var arr = ["This","is","my","cat"];
// document.write("Array: <br>"+arr+ "<br>")
// arr=arr.join(" ")
// document.write("String: <br> "+arr+ "<br>")
// //Q13
// document.write("Devices: <br>")
// devices = []
// devices.push("Keyboard")
// devices.push("Mouse")
// devices.push("Printer")
// devices.push("Monitor")
// document.write(devices+"<br><br>")
// for(var i =0 ; i<devices.length ; i++){
//     document.write("Out: <br>" + devices[i]+ "<br>")
// }
// //Q14
// document.write("Devices: <br>")
// devices = []
// devices.push("Keyboard")
// devices.push("Mouse")
// devices.push("Printer")
// devices.push("Monitor")
// document.write(devices+"<br><br>")
// for(var i =devices.length-1 ; i>=0 ; i--){
//     document.write("Out: <br>" + devices[i]+ "<br>")
// }
// //Q15
// var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("<select>")
// for (var i = 0; i < mobile.length; i++) {
//     document.write("<option value>" + mobile[i] + "</option>")
// }
// document.write("</select> <br>")


// ---------- chapter # 17-20 ---------------
// //Q1
// var arr = [""]  [""];
// //Q2--> by faizan
// var array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (var i = 0; i < 3; i++) {
//     for(var j = 0 ; j<4 ; j++){
//         document.write(array[i][j] + " ")
//     }
//     document.write("<br>");
// }
// //Q3
// for (var i = 1; i <= 10; i++) {
//     document.write(i+ "<br>");
// }
// //Q4
// var t = +prompt("Enter the number of table");
// var l = +prompt("Enter the length of table");
// document.write("<b>Table of " + t + "</b> <br>")
// document.write("<b>length: " + l + "</b> <br>")
// for (var i = 1; i <= l; i++) {
//     document.write(t + " * " + i + " = " + t * i + "<br>");
// }
//Q5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(var i =0 ; i<fruits.length ; i++){
// document.write(fruits[i]+"<br>") 
// }
// document.write("<br> <br> ")
// for(var i =0 ; i<fruits.length ; i++){
//     document.write("Element at "+i+ " index is "+fruits[i]+"<br>")
// }
// //Q6
// //a
// document.write(" <b> Counting: </b> <br> <br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }
// document.write("<br> <br>")
// //b
// document.write("<b>Reverse Counting:</b> <br> <br>")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }
// document.write("<br> <br>")
// //c
// document.write("<b>Even:</b> <br> <br>")
// for (var i = 0; i <= 20; i = i + 2) {

//     document.write(i + ",");
// }
// document.write("<br> <br>")
// //d
// document.write("<b>Odd: </b><br> <br>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ",");
// }
// document.write("<br> <br>")
// //e
// document.write("<b> Series:</b> <br> <br>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "k,");
// }
// document.write("<br> <br>")
// //Q7 
// var a = ["cake", 'apple pie', 'cookie', "chips", "patties"]
// var s = prompt("What do you want to search? ")

// for (var i = 0; i < a.length; i++) {

//     if (s == a[i]) {
//         document.write(s + " is <b>availaible</b> at index " + i + " in our bakery <br>")
//         break;

//     }
// }
// if (s != a[i]) {
//     document.write("We are Sorry. " + s + " is <b> not availaible</b> in our bakery <br>")
// }

// //Q8
// var a = [24, 53, 78, 91, 12]
// document.write("Array item: "+ a+ "<br>" )
// for(var i = 0 ; i <a.length ; i++){
//     if(a[i]>a[i+1]){
//         document.write( "The largest number is "+ a[i] + "<br>")
//     }
// }
// //Q9
// var a = [24, 53, 78, 91, 12]
// document.write("Array item: "+ a+ "<br>" )
// for(var i = 0 ; i <a.length ; i++){
//     if(a[i]<a[i-1]){
//         document.write( "The smallest number is "+ a[i] + "<br>")
//     }
// }
// //Q10
// for (var i = 5; i <= 100; i = i + 5) {

//     document.write(i + ",");
// }
// document.write("<br>")






















