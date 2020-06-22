// ================================================
//              Chapter 21 to 25
// ================================================             

// Task # 1

// var first = prompt('Enter your first name');
// var last = prompt('Enter your last name');
// var fullname = first  + " "+ last ;
// alert( fullname);


// Task # 2

// var str = prompt("Enter Your favorite mobile phone model");
// var lenght = str.length;
// document.write(" My favorite phone is:" + str + "<br>");
// document.write("Lenght of string:" + lenght);

// Task # 3


// var a = "Pakistani";
// var b = a.indexOf("n");
// document.write("String:" + a + "<br>");
// document.write("Index Of 'n':" + b);

// Task # 4

// var x = "Hello world";
// var y = x.lastIndexOf("l");
// document.write("String:" + x + "<br>");
// document.write("Index Of 'l':" + y);


// Task # 5

// var x = "Pakistani";
// var y = x.charAt(3);
// document.write("String:" + x + "<br>");
// document.write("Character at index 3:" + y);


// Task # 6


// var first = prompt('Enter your first name');
// var last = prompt('Enter your last name');
// var fullname =first.concat( " " +last);
// alert( fullname);


// Task # 7

// var a = "Hyderabad";
// var c = a.replace("Hyder" , " Islam" );
// document.write("City:" + a + "<br>");
// document.write("After replacement:" + c);


// Task # 8

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// var chng = message.replace(/and/g , "&");
// document.write(chng);


// Task # 9

// var x = 472;
// var y = x.toString();
// document.write("Value:" + y + "<br>");
// document.write(typeof y +"<br>");

// var x = "472";
// var y = parseInt(x);
// document.write("Value:" + y + "<br>");
// document.write(typeof y);

// Task # 10

// var x = prompt("Enter your Name");
// var y = x.toUpperCase();
// document.write("User input:" + x + "<br>");
// document.write("Upper Case:" + y);


// Task # 11


// var x = prompt("Enter your Name");
// var y = x.charAt(0).toUpperCase() + x.slice(1);
// document.write("User input:" + x + "<br>");
// document.write("Title Case:" + y);


// Task # 12 incomplete

// var user = 33.36;
// var final = Math.trunc(user);
// document.write("Number:" + user + "<br>");
// document.write("Result:" + final);

// Task # 13

// var username = prompt("Enter your name");

// if (username === '@') {
//     alert("Please enter a valid username");
// }
// else if (username === '!') {
//     alert("Please enter a valid username");
// }
// else if (username === ',') {
//     alert("Please enter a valid username");
// }
// else (username === ".")
// {
//     alert("Please enter a valid username");
// }


// Task # 14 incomplete


// var user = prompt("welcome to ABC Bakery. what do you want to order sir/ma'ma ? ")
// user = user.toLowerCase();
// var a = ["cake", "apple pie","cookie", "chips", "patties"];
// var indx = a.findIndex();
// for (var i = 0; i <= 4; i++){
//     if(user === a[i]){
//         alert("tgrh" + indx)
//     }
// }


// Task # 15

// Task # 16


// Task # 17

// var name = prompt("Enter your name");
// var sav = name.slice(-1);
// document.write("User input:" + name + "<br>");
// document.write( "Last character of input:" + sav);



// =======================================================
//                Chapter # 26  to 30
// =======================================================               

// Task # 1

// var num = prompt("enter a positive integer");
// var flr = Math.floor(num);
// var rund = Math.round(num);
// var cel = Math.ceil(num);
// document.write( "Number:" + num + "<br>");
// document.write("Floor value:" +flr + "<br>");
// document.write("Round off value:" + rund + "<br>");
// document.write("Ceil value:" + cel + "<br>");



// Task # 2

// var num = prompt("enter a negative floating point");
// var flr = Math.floor(num);
// var rund = Math.round(num);
// var cel = Math.ceil(num);
// document.write( "Number:" + num + "<br>");
// document.write("Floor value:" +flr + "<br>");
// document.write("Round off value:" + rund + "<br>");
// document.write("Ceil value:" + cel + "<br>");


// Task # 3

// var num = prompt("Enter a number");
// var x = Math.abs(num);

// document.write("The absolute value of " + num  + " is " + x); 


// Task # 4

// var num = Math.random()*6;
// var c = Math.ceil(num);
// document.write("Random dice value:" + c);

// Task # 5

// var num = Math.random()*2;
// var c = Math.ceil(num);
// document.write(c + "<br>");
// if (c === 1){
//     document.write("Random coin value = Heads" )
// }
// else 
// {
//     document.write("Random coin value = Tails" )
// }

// Task # 6


// var num = Math.random()*100;
// var c = Math.ceil(num);
// document.write("random number between 1 & 100:  " + c);

// Task # 7

// var wght = prompt("Enter your weight in kilograms");
// var finl = parseFloat(wght);
// document.write("The weight of user is " + finl +" kilograms.")

// Task # 8

// var a = +prompt("Enter a value", "Between 1 to 10");
// var b = Math.random() * 10;
// var c = Math.ceil(b);
// if (a == c) {
//     alert(" congratulation");
// }
// else {
//     alert("Try again");
// }






// =============================================================
//                 Chapter # 31 to 34
// ===============================================================   


// Task # 1

// var a = new Date();
// document.write(a);


// Task # 2

//  var monthName = ["January", "Feburary", "March", "April", "May", "June", "July" , "August","September","October","November","December"];
//  var now = new Date();
//  var theMonth = now.getMonth();
//  var nameOfMonth = monthName[theMonth];
//  alert("Current Month: " + nameOfMonth);




// Task # 3

//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  alert(nameOfToday);


// Task # 4


// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday === dayNames[0,6]){
//     alert("Its Fun day")
// }

// else{
//     alert("not a fun day")
// }


// Task # 5

// var d = new Date();
// var dayOfMonth = d.getDate();

//     if (dayOfMonth <= 15) {
//         alert("First Fifteen Days Of Month. ")
//     }
//     else {
//         alert("Last days of the month")
//     }

// Task # 6

// var currentDate = new Date();
// var timemilli = currentDate.getTime();
// var mite = timemilli / (1000 * 60);

// document.write("Current Date: " + currentDate + "<br>");
// document.write("Elapsed Milliseconds since January 1, 1970: " + timemilli  + "<br>");
// document.write("Elapsed Mintues since January 1, 1970: " + mite);



// Task # 7


// var c = new Date();
// // var a = c.getTimes();
// var b = c.getHours();
// if (b <=12 ){
//     document.write("It's AM")
// }
// else 
// {
//     document.write("It's PM")
// }


// Task # 8


// var laterDate = new Date("Dec 31,2020")

// alert("Later Date: " + laterDate);

// Task # 9

// var firt = new Date("April 25, 2020");
// var x = new Date();
// var diff = (x - firt)/(1000*60*60*24);
// var cil = Math.ceil(diff);
// alert(cil + "  Days have passed since 1st Ramdan,2020");


// Task # 10


//  var firt = new Date("Dec 05, 2015");
//  var x = new Date("2015");
//  var diff = (firt - x)/(1000*60);
// document.write("On refrence date " + firt + " <br>")
// document.write(diff + " seconds had passed since beginning of 2015")

// Task # 11

// var currentDate = new Date();
// document.write( "Current Date: " + currentDate + " <br>");
// var set = currentDate.setHours(9);

// document.write( "Current Date: " + currentDate + " <br>");
// document.write(set);



// =======================================================
//                Chapter # 35 to 38
// =======================================================      

// Task # 1

// function dat(){
//     var currnetdate= new Date();
//     document.write(currnetdate);
// }
// dat();



// Task # 2

// function nam(){
//     var firt = prompt("Enter your first name ");
//     var last = prompt("Enter your last name ");
//     alert(firt + " " + last);
// }
// nam();


// Task # 3


// function add(){
//     var num1 = +prompt("Enter first number ");
//     var num2 = +prompt("Enter second number ");
//     alert(num1 +  num2);
//     return num1 + num2;
   
// }
// add();


// Task # 4



     
