/*Programmer: Jenn Woldt

file name: rescue

date: 12-9-2024*/


//global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");


//Hamburger menu function
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//function to display the first answer 
function ans1(){
    heading.style.display = "block";
    answer.textContent = "Right away!";  
}

//function to display second answer 
function ans2(){
    heading.style.display = "block";
    answer.textContent = "Forge, Anvil, Hammer, and Thongs";
}
//function to display the third answer
function ans3(){
    heading.style.display = "block"
    answer.textContent ="Junkyards, body shops and just ask around!";
}
 //function to display the fourth answer
 function ans4(){
    heading.style.display = "block"
    answer.textContent = "A millenia ago, around 1500 B.C";
 }