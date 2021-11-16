// alert ("bhojani");

/*document.write("<h1> Chapter 31 to 34 </h1>")
document.write("<h2> DATE METHODS </h2> ")*/


// Q1
// var now = new Date();
// document.write(now);

// Q2
// var months = ["jan","feb","march","April","may","june","july","Aug","Sep","Oct","Nov","Dec"];
// var now = new Date();
// var currentMonth = now.getMonth();
//     document.write ("Current month is: " + months[currentMonth]);


// Q3
/*var days = ["sunday","monday","tuesday","wednesday","thurday","friday","saturday"];
var now = new Date();
var currentday = now.getDay();
document.write ("today is " + days [currentday]);*/

// Q4
/*var day = new Date() .toDateString().slice(0,3);
if (day === "saturday" || day ==="sunday"){
    alert ("<br> "+" Its fun day");
}else {
    alert ("today is:" + "" + day)
}*/

// Q5
// var date = new Date().getDay();
// if ( date<16){
//     document.write ("<br> first fifteen days of the month");
// }else {
//     document.write( "<br> last days of the month");
// }

// Q6
/*var todayDate = new Date ();
var todayMilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = todayMilli - todayMin;
var diffMin = diff/(1000*60*60);
var accuratemin = Math.floor(diffMin)

document.write("current Date: " + todayDate );
document.write("<br> elapsed milliseconds since january 1,1970: " + todayMilli);
document.write("<br>elapsed minutes since january 1, 1970: " +accuratemin);*/

// Q7
// var now = new Date().getHours();
// if(now>=24 && now <12){
//     alert ("Its am")
// }else {
//     alert ("Its pm")
// }

// Q8
// var month= 0;
// var day = new Date (2020, month + 12,0);
// document.write("Laster date:"+ day.toString());

// Q9
/*var ramazanDate = new Date ("June18,2015");
var now = new Date ();
var miliram = ramazanDate.getTime();
var nowmili = now.getTime();
var differ = nowmili  - miliram ;
var totalDays = differ / (1000*60*60*24); 
totalDays = Math.floor (totalDays);

document.write (` ${totalDays} days have passed since 1st Ramazan , 2015`);*/


// Q10
/*var year2015 = new Date ("2015 12 05");
var sec2015 = year2015.getTime();
var today = new Date ();
var sec2021 = today.getTime();
var totalSec = sec2021 - sec2015; 

document.write("On reference date " + year2015 + "<br>") ;
document.write (totalSec + " " + "seconds had passed since beginning of 2015")*/

// Q11
/*varDate = new Date ();
varDate.setHours (13,48,03);
varsetDate = new Date();
varsetDate.setHours(12,48,03);

document.write("Current Date: " + varDate + "<br>");
document.write("1 hours ago it was " + varsetDate);*/

// Q12
// varDate = new Date ();
// varDate.setFullYear (2015,11,05);
// varsetDate = new Date();
// varsetDate.setFullYear(1915,11,05);

// document.write("Current date: " + varDate + "<br>");
// document.write("100 years back,it was " + varsetDate);

// Q13
// var age = +prompt("Enter your age ?");
// var year = new Date().getFullYear()- age;

// document.write ("Your age is " + age);
// document.write("<br> Your birth year is " + year);

// Q14
var customerName = prompt("Enter Your Name").toUpperCase();
var month = prompt ("Enter month");
var capMonth = month.charAt(0).toUpperCase()+ month.slice (1);
var numOfUnits = +prompt("Enter num of units");
var chargesPerUnit = 16;
var netAmount = (numOfUnits * chargesPerUnit);
var latepaymentCharges =350;
var grossAmount = netAmount + latepaymentCharges;

document.write("Cutomer Name: " + customerName);
document.write("<br>Month: " + capMonth);
document.write("<br>Number Of Units: " + numOfUnits);
document.write("<br> Charges Of Per Unit: " + chargesPerUnit);
document.write("<br>Net Amount Payable (within Due Date): " + netAmount);
document.write("<br> Late Payment Charges:" + latepaymentCharges);
document.write("<br> Gross Amount Payable (after due date):" + grossAmount);











