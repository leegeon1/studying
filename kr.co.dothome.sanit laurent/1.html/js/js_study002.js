// const loginInput = document.querySelector("#login-form input");
// const loginBbutton = document.querySelector("#login-form button");

// function handleLoginBtn(){
//     const userName = loginInput.value;
    // if(userName ===""){
    //     alert("please write your name");
    // }else if(userName.length > 15){
    //     alert("your name is too long.")
    // }
//     console.log(userName);
// };
// loginBbutton.addEventListener("click",handleLoginBtn);



// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function OnLoginSubmit(event){
//     event.preventDefault();
//     // const userName = loginInput.value;
//     console.log(loginInput.value);
// };
// function handleLink(event){
//     event.preventDefault();
//     console.log(event);
// }
// loginForm.addEventListener("submit",OnLoginSubmit);
// link.addEventListener("click",handleLink);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logOut = document.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function OnLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText = "Hello " + userName;
    // 위와 아래랑 동일하고 아래의 방식은 
    // string이랑 변수를 합치는 방법 , 변수를 string안에 포함시키는 방법이다.
    paintGreetings(username);
}; 

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


// 로그인이 됐을 때
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",OnLoginSubmit);
}else {
    // show the greetings
    paintGreetings(savedUsername);
};
logOut.addEventListener("click",ClickLogOut);

// 로그아웃
function ClickLogOut(event){
    event.preventDefault();
    alert("로그아웃 하시겠습니까?");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = '';
    localStorage.removeItem(USERNAME_KEY);
}








// addEventListener 안에 있는 함수는 직접 실행하지 않는다
// 브라우저가 실행시켜주고
// 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
// addEventListener의 함수에서 object에 대한 자리만 할당해주면
// 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
// 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!



// local storage는 browser에서 제공하는 DB로 key:value로 데이터를 저장한다.
// -code
// localStorage.setItem("key","value")로 값을 저장
// localStorage.getItem("key")로 값을 불러옴
// localStorage.removeItem("key")로 데이터를 삭제

// -활용
// 추후 local storage에 저장된 값이 있다면, login form을 다시 보여주지 않고 바로
//  greeting 문구를 띄운다. 만약 local storage에 username이 저장되어있지 않다면 
//  login form을 보여주어 username을 입력받아 값을 저장한다