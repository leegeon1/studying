const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${Minutes}:${Seconds}`;
}
getClock()
setInterval(getClock,1000);
// setTimeout(sayHello,1000);


// "1".padStart(2,"0"); // 1 한자리 숫자일 때는 10으로 두자리면 적용x
// "1".padEnd(2,"0"); 위와 동일하지만 뒷자리에 적용
// 길이가 1인 문자가 있을 때
// padStart 를 통해서 2자리가 아닐때 0을 앞에 추가해줄 수 있게
// 사용하는 함수 (스트링만 사용가능)

// const clockTitle = document.querySelector(".js-clock");


// function christmasDay(){
//     const setDate = new Date("2022-12-25T00:00:00"); //크리스마스 d-day
//     const newDate = new Date(); //지금날짜
//     const christmas = setDate.getTime() - newDate.getTime(); //크리스마스 - 지금 날짜
//     const day = String(Math.floor(christmas / (1000*60*60*24))).padStart(3,"0"); //크리스마스가 밀리세컨드 단위로 생성됨 그래서 시간으로 변형
//     const hours = String(Math.floor((christmas % (1000*60*60*24))/(1000*60*60))).padStart(2,"0");
//     const mins = String(Math.floor((christmas % (1000*60*60))/(1000*60))).padStart(2,"0");
//     const seconds = String(Math.floor((christmas % (1000*60))/1000)).padStart(2,"0");
//     clockTitle.innerText = `${day}d ${hours}h ${mins}m ${seconds}s`
// };
// christmasDay();
// setInterval(christmasDay,1000);

