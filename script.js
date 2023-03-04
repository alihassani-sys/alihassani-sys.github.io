
var date1 = new Date('2000/01/01 00:00:00');
var seconds = date1.getTime() ;

let date2 = Date.now() ;



let diff = date2 - date1;



 function hello(){
    document.getElementById("here").innerHTML =  ~~(diff/1000) + " Seconds!";
    }


const aliHassani = document.getElementById("header1");



 function helloafter(){
    document.getElementById("here").innerHTML =  "";
}    

let myName = document.getElementById("header1");



 setInterval(helloafter,5000);

