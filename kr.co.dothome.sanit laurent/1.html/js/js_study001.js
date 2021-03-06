// Boolean study

// 불리언(boolean)은 논리학에서 참(true)과 거짓(false)을 나타내는 데 사용됩니다.
// 또한, 논리 연산(logical operation)이란 주어진 논리식을 판단하여 참(true)과 거짓(false)을 결정하는 연산입니다.
// const amIfat = null;
// let something;
// console.log(something);
// console.log(amIfat);

// true = 1 참 켜지다, false = 0 거짓 꺼지다 

// null = 아무것도 없음이라는 값 (즉 const amIfat = null; 는 amIfat 이라는 변수명에
// 아무것도 없다라는 값을 가진 null을 대입한 것)
// let something; 이런식으로 변수를 선언하면 underfined 값이 나옴 underfined는 저런식으로 변수에
// 아무런 값을 넣지 않았을 때 나옴 null은 없다라는 값을 넣어준 거고 undefined는 값을 넣지 않은 것


// Array study

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
// console.log(daysOfWeek);
// for(let i = 0; i >= daysOfWeek.length; i++){
//     console.log("지금 현재" + daysOfWeek[0] + "요일을 지나가고 있고 다음 남은 요일은"+ daysOfWeek[i] + "요일이다");
// };

// console.log(daysOfWeek);



// Object study
// const palyer = {
//     name: "lee",
//     points: 10000,
//     fat: false
// }
// console.log(palyer.name);
// console.log(palyer["name"]);

// day 2022 07 06

// Functions
 
// function sayHello(nameOfPerson , age){
//     console.log("hello my name is "+nameOfPerson+" and i'm " + age);
// };
// sayHello("hi" , 21)
// sayHello("bye" , 15)
// sayHello("nice" , 22)

// function plus(a,b){
//     console.log(a + b);
// }
// function divide(a,b){
//     console.log(a / b);
// }
// plus(60, 8);
// divide(98, 20);

// const player = {
//     name: "geon",
//     sayHello: function(outerPersonName){
    // 보다시피 위에 function하고 지금 오브젝트에 펑션이랑 구문이 다름
//     console.log("hello " + outerPersonName);
//     },
// };
// console.log(player.name);
// player.sayHello("juhawn");
// player.sayHello("Geon");

// const calculator = {
//     add: function(a,b){
//         alert(a + b);
//     },
//     min: function(a,b){
//         alert(a - b);
//     },
//     div: function(a,b){
//         alert(a / b);
//     },
//     power: function(a,b){
//         alert(a ** b);
//     },
// };
// calculator.add(1,5);
// calculator.min(4,2);
// calculator.div(15,3);
// calculator.power(4,5);
// console.log(calculator.add(2,3));

// const age = 96;
// function calculateKrAge(ageOfForeinger){
//     return ageOfForeinger + 2;
// };

// const KrAge = calculateKrAge(age);
// console.log(KrAge);

// const calculator = {
//     add: function(a,b){
//         return a + b;
//     },
//     min: function(a,b){
//         return a - b;
//     },
//     div: function(a,b){
//         return a / b;
//     },
//     power: function(a,b){
//         return a ** b;
//     },
// };
// const addResult = calculator.add(2,3);
// console.log(addResult);


// const calculator = {
//     add: function(a,b){
//         return a + b;
//     },
//     min: function(a,b){
//         return a - b;
//     },
//     div: function(a,b){
//         return a / b;
//     },
//     power: function(a,b){
//         return a ** b;
//     },
// };
// const addResult = calculator.add(4,3);
// const minResult = calculator.min(addResult, 5);
// const divResult = calculator.div(10,minResult);
// const powerResult = calculator.power(addResult,divResult);




// const age = parseInt(prompt("how old are you?"));

// console.log(typeof age ,typeof parseInt(age));


// Conditionals part Two 조건문

// const age = parseInt(prompt("how old are you?"));
// console.log(isNaN(age));

// if(isNaN(age)){
//     console.log("please write a number");
// }else[
//     console.log("thank you for writing your age")
// ]

// isNaN = 변수 or 스트링,넘버를 숫자인지 아닌지 판별해줌

// const age = parseInt(prompt("how old are you?"));

// if(isNaN(age) || age < 0){
//     console.log("please write a real positive number");
// }else if(age < 18){
//     console.log("yor are too young");
// }else if(age >= 18 && age <= 50){
//     console.log("you can drink");
// }else if(age > 50 && age <= 80){
//     console.log("you should exercise");
// }else if(age > 80){
//     console.log("you can do whatever want");
// }else{

// }

// true || true === true
// false || true === true
// true || false === true
// false || false === false

// true && true === true
// false && true === false
// true && false === false
// false && false === false



// const age = parseInt(prompt("how old are you?"));

// if(isNaN(age) || age < 0){
//     console.log("please write a real positive number");
// }else if(age < 18){
//     console.log("yor are too young");
// }else if(age >= 18 && age <= 50){
//     console.log("you can drink");
// }else if(age > 50 && age <= 80){
//     console.log("you should exercise");
// }else if(age === 100){
//     console.log("wow you are wise");
// }else if(age > 80){
//     console.log("you can do whatever want");
// }

// if((a && b) || (c && d)){

// }


// 2022-07-07

// document.title = 'hello ! from JS!' 
// const title =  document.getElementById("title");
// title.innerText = "got you!"

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// const title = document.getElementsByTagName("h1");

// document.querySelector는 css의 선택자를 사용해서 class hello를
// 찾음

// const title = document.querySelector(".hello h1");

// title.innerText = "hello";
// title.style.color = "blue";

// function handleTitleClick(){
//     title.style.color = "red";
//     title.innerText = "that was a right click!"
// };

// function handleMouseEnter(){
//     title.innerText = "Mouse is here!"
//     title.style.color = "green";
// }
// function handleMouseLeave(){
//     title.innerText = "Mouse is gone!"
//     title.style.color = "blue";
// }
// function handleMouseResize(){
//     title.innerText = "you just resized!"
//     title.style.color = ""
// }
// function handleWindowCopy(){
//     alert("copier!");
// }
// function handleWindowOffline(){
//     alert("SOS no Wife");
// }
// function handleWindowOnline(){
//     alert("All good");
// }
// title.addEventListener("click",handleTitleClick);
// title.onclick = handleTitleClick;
// title.addEventListener("mouseenter",handleMouseEnter);
// title.addEventListener("mouseleave",handleMouseLeave);
// window.addEventListener("resize",handleMouseResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);

// 날짜 계산기 연산자 사용법

// let num = parseInt(prompt("숫자를 입력해주세요"));

// sec=24*60*60;
// si=60*60; 
// min=60;

// const days = parseInt(num/sec);
// num%=sec;
// const hor = parseInt(num/si);
// num%=si;
// const minit =  parseInt(num/min);
// num%=min;

// alert(days+"일 "+hor+"시 "+minit+ "분"+num+ "초 입니다.");


// const title = document.querySelector(".hello h1");
// function handleTitleClick(){
//     const actived = "active";
    // if(title.classList.contains(actived)){
    //     title.classList.remove(actived);
    // }else{ 
    //     title.classList.add(actived);
    // }
//     title.classList.toggle(actived);
// };
// title.addEventListener("click",handleTitleClick);




// let innerWidth = window.innerWidth;
// const bg = document.body;
// function backGroundColors() {
//     const bgColor = {
//         top : "top",
//         mid : "mid",
//         btm : "btm"
//     }
//     if (innerWidth > 1000) {
//         bg.classList.remove(bgColor.mid,bgColor.btm);
//         bg.classList.add(bgColor.top);
//     } else if (innerWidth >= 700 && innerWidth < 1000) {
//         bg.classList.remove(bgColor.top,bgColor.btm);
//         bg.classList.add(bgColor.mid);
//     } else if (innerWidth < 699) {
//         bg.classList.remove(bgColor.mid,bgColor.top);
//         bg.classList.add(bgColor.btm);       
//     };
// };


// const bg = document.body;
// window.addEventListener("resize", function(){
//     const newWindow = this.innerWidth;
//     const bgColor = {
//         top : "top",
//         mid : "mid",
//         btm : "btm"
//     }
//     if (newWindow > 1000) {
//         bg.classList.remove(bgColor.mid,bgColor.btm);
//         bg.classList.add(bgColor.top);
//     } else if (newWindow >= 700 && newWindow < 1000) {
//         bg.classList.remove(bgColor.top,bgColor.btm);
//         bg.classList.add(bgColor.mid);
//     } else if (newWindow < 699) {
//         bg.classList.remove(bgColor.mid,bgColor.top);
//         bg.classList.add(bgColor.btm);       
//     };
// });


    












