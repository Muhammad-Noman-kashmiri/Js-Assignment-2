// Chapter # 21-25
// JAVASCRIPT
// Task 1

// var firstname=prompt('Enter your First Name ' );
// var Lastname=prompt(' Enter your Last Name');
// document.write("Assalm u Alaikum " +firstname    );
// document.write(" " +Lastname    );

// Task 2
// var name=prompt('Enter your favourite Mobile phone Name' );
//  var n = name.length;
// document.write("My favourite phone is " +name +"<br>" +"Length Of String is "+n);

// Task 3
// var name="Pakistan";
//  var a=name.indexOf("n");
// document.write("String: "+name+"<br>"+ "Index of n is: " +a);

// Task 4
// var name="Hello World";
// var a=name.lastIndexOf("l");
//  document.write("String: "+name+"<br>"+ "Index of l is: " +a);

// Task 5
//  var name="Pakistani";
//  var a= name.substring(3,4);
// document.write("String: "+name+"<br>"+ "Character at index 3 is: "+a );

// Task 6

// var firstname=prompt('Enter your First Name ' );
// var Lastname=prompt(' Enter your Last Name');
// var c=firstname.concat(Lastname);
// document.write(c);

// Task 7

//  var city="Hyderabad";
//  document.write("city: "+city);
//  var rep=city.replace("Hyder","Islam");
//  document.write("<br>"+"After Replacement "+rep);

// Task 8

// var message = "Ali and sami are best friends. they play cricket and football together";
// document.write(message);
// var rep=message.replace(/and/g,"&");
// document.write("<br>"+ "<br>"+rep);

// Task 9

// var s="472";
// document.write("value "+s);
// document.write("<br>"+ "Type: string");
// document.write("<br>"+"value "+s);
// document.write("<br>"+ "Type: Number");

// Task 10

// var name=prompt('Enter any Name ' );
// document.write("User input "+name);
// var u=name.toUpperCase()
// document.write("<br>"+ "Upper Case "+u);

// Task 11
// var name=prompt('Enter any Title ' );
//  document.write("User input "+name);
//  var firstcharacter=name.slice(0,1)
//  var rem=name.slice(1)
//  firstcharacter=firstcharacter.toUpperCase()
//  rem= rem.toLowerCase()
//  document.write("<br>"+ "Title Case "+firstcharacter+ rem);

// Task 12


// var num=35.36;
// var s=num.toString();
// document.write("Number : "+num)
// var result=s.replace(".","");
// document.write("<br>"+"Result : "+result);

// Task 13


// function check_name(letters){
//     var regex = /^[a-zA-Z]+$/;
//     if(regex.test(letters.yourname.value) == false){
//    alert("You enter Invalid Name");
//    letters.yourname.focus();
//    return false;
//     }
//   }

// Task 14

// var item=prompt("Welcome to our bakery what do you want to order");
// item=item.toLowerCase()
// var arr= ["cake", "apple pie", "cookie", "chips", "patties"];
// var a=arr.indexOf("cake")
// for(i=0; i<arr.length; i++){
//     if(arr[i]===item){
//     document.write(item+" is available at index " +a +" in our bakery")
   
// }

// }


// Task 15





// Task 16

// var name=prompt("Enter any Input")
// var a=name.split(0,1);
// for (i=0;i<name.length;i++){
// }


// Task 17

// var name=prompt("Enter any Input")
// document.write("user input "+name)
// var Last = name.charAt(name.length-1);
// document.write("<br>"+"Last character is "+Last)

// Task 18


// var s="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+s);
// var a = String.fromCharCode(84,104,101);
// document.write("<br>"+"There are  "+a);




// Chapter # 26-30


// Task 1


// var integer=prompt("Enter Number ");
// alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));


// Task 2

// var integer=prompt("Enter Negative Number ");
//  alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));

// Task 3
// var num=prompt("Enter any number")
// var b=Math.abs(num);
// document.write("The absolute value of " +num +" is "+b)


// Task 4
//   var a=Math.random() *6;
//   var b=Math.floor(a);
//   var c=b+1;
//   document.write("Random Dice value: "+c);



// Task 5

//    var a=Math.random() *2;
//    var b=Math.floor(a);
//    var c=b+1;
// if(c===2){
//     document.write("2"+"<br>"+"Random coin value: Heads "); 
// }
// else     document.write("1"+"<br>"+"Random coin value: Tails "); 

// Task 6

// var a=Math.random() *100;
//    var b=Math.floor(a);
//    var c=b+1;
//    document.write("Random Number between 1 and 100: "+c); 

// Task 7

// var weight=prompt("Enter Your Weight");
// parseInt(weight);
// alert(weight);

// Task 8

// var username=prompt("Enter your name");
// var num=prompt("Enter a number between 1 and 10");

// if(num==5){
//     document.write("Congratulate "+username+" you find the secret number "); 
// }
// else  document.write("Try Again "+username);


// chapter 31#34

// Task 1
// var td = new Date();
// document.write(td);


// Task 2

//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
  
//     var d = new Date();
//     var n = month[d.getMonth()];
//    document.write("Current Month : "+n)

// Task 3
  

    // var d = new Date();
    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";
  
    // var n = weekday[d.getDay()];
    // var n = n.slice(0, 3);
    // document.write("Today is: "+n)

    // Task 4

//     var d = new Date();
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
  
//     var n = weekday[d.getDay()];
  
//     if(n=="Sunday" | n=="Saturday"){
//         document.write("it's fun day")
//     }
// else {
//     document.write("Today is "+n)
// }

 // Task 5

//  var d = new Date();
//  if(d.getDate<16 ){
//             document.write("First fifteen days of month")
//         }
// else{
//     document.write("Last days of month")
// }

 // Task 6

//  var d = new Date();
//  document.write("Current Date: "+d)
//  var n = d.getTime();
//  document.write("<br>"+"Elapsed miliseconds Since January 1,1970: "+n)
//     var minutes = 1000 * 60;
//     var d = new Date();
//     var t= d.getTime();
//     var y = Math.round(t /minutes);
//     document.write("<br>"+"Elapsed minutes Since January 1,1970: "+y)
  
    // Task 7

//  var d = new Date();
//  var n = d.toLocaleTimeString();
//     var n = n.slice(9, 11);
//     document.write("it's   "+n)

  // Task 8

// var laterdate= new Date(2020, 11, 31, 00, 00, 00);
// document.write("Later Date " +laterdate);

  // Task 9

//   var oneday=24 * 60 * 60 * 1000;
//   var date=new Date();
//   var startDate=new Date(date.getFullYear(), date.getMonth()-1, -6); 
//   var today=new Date();
//   var get= Math.round(Math.abs((date - startDate) / oneday));
//   document.write(get+" "+" Days have passed since 1 Ramadn 2020");

  
  // Task 10
  
// var date=new Date();
// var t1 = new Date(date.getFullYear()-5,date.getMonth()+6,5 );
// var t2 = new Date();
// var dif = t1.getTime() - t2.getTime();

// var Seconds =Math.round( dif / 1000);
// var res = Math.abs(Seconds);
// document.write(res+" "+" seconds is passed since Dec 5 2015");

  // Task 11
//   var current=new Date();
//   var get=current.getHours();
//   document.write("Current Date is:"+current+" "+get+"\n");
//   current.setHours(current.getHours()-1);
//   document.write("<br>"+"Last 1 hour go Date was:"+current)


 
// Task 12

// var current=new Date();
// document.write(current+"\n"+"<br>")
// var d = new Date();
// d.setFullYear(d.getFullYear()-100, d.getMonth() );
// document.write("100 year back it was"+" "+d);


  // Task 13

//  var age=prompt("Enter Your age");
// document.writeln("Your age is "+age);
// document.writeln("<br>");
//  var age1= 2020-age;
//  document.writeln("Birth year is  "+age1);

// Task 14
// document.writeln("<h1>"+"K-Electric Bill "+"</h1>"+"<br>");
// var name=prompt("Enter Name");
// document.writeln("Customer Name: "+name);
//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
  
//     var d = new Date();
//     var n = month[d.getMonth()];
//    document.write("<br>"+"Current Month : "+n)
//    var units=prompt("Enter Units");
//    var a=Math.round(units)
//    document.writeln("<br>"+"Number of units: "+a);
//    var c=prompt("Enter Charges");
//    document.writeln("<br>"+"Charges per units: "+c);
//    var amount=units*c
//    var amount=Math.round(amount)
//    document.writeln("<br>"+" Net Amount Payable (within Due Date) "+amount);
//    document.writeln("<br>"+" Late Payment Surcharge: 350 ");
//    var add=+amount+350;
//    document.writeln("<br>"+" Gross Amount Payable (after Due Date) "+add);
   

// Chapter 35-38

// Task 1

//     function d(a) {
//   return a;
// }
// d =new Date();
// document.write(d)
