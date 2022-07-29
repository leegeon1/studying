const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
};

// JSON.stringify() Object나 array또는 어떤 js 코드건 간에
// 스트링으로 바꿔줌

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
// parentElement는 선택된 요소의 부모

// todolist에 만들어진 todo 항목의 제거를 구현해보았다.
// todo text 우측에 위치한 button을 클릭시 todo text 및 button을 제거.
// button에 click eventLisnter를 이용/ button이 눌린 li만 제거하기 위해 event.target사용
// 삭제를 위해 event.target.parentNode.remove() 사용
// event.target: event가 발생한 element를 반환
// parentNode : 부모 element반환

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
};
toDoForm.addEventListener("submit",handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the trun of",item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // 위의 방식으로 string을 Object형식으로 변환
    // 하지만 이 경우는 array로 변환됨

    // parsedToDos.forEach(sayHello);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
};



// parsedToDos.forEach((item) => sayHello(item));
// 위 문장을 parsedToDos.forEach((item) => sayHello()); 이렇게 주면 undefined가 나타나는데 화살표 함수에서 매개변수를 사용하면 무조건 대상 함수에 전달을 해줘야하나요?
// parsedToDos.forEach((item) => sayHello()); 이렇게 사용하면
// forEach의 인덱스값이 sayHello 인덱스값으로 사용을 못함
// 파라미터로 매개변수를 주지 않았기 때문에
// item이라는 매개변수에 값이 들어가지 않은 것

// forEach(func.) : array의 각 item에 대하여 func.를 실행한다.
// 화살표 표기법: forEach( (item) => console.log(item) )
// array의 각 요소를 item이라고 하고, console.log(item)을 실행한다.
// 아래와 동일한 기능을 짧게 표현가능


// function sayHello(item){
//     console.log("this is the trun of",item);
// }
 // parsedToDos.forEach(sayHello);


// parsedToDos.forEach((item) => console.log("this is the trun of" , item));


// function에 array를 담아서 사용하는 방법과 forEach에 function을 화살표
// 함수로 생략시키고 사용하는 방법 위 두개의 방법은 결과값이 동일하다.


// filter 함수
// const arr = [123,1235,222,3333,4444];
// const result = arr.filter(nums => nums <= 1000);
// console.log(result) = [123,222];
// 필터 함수를 화살표함수로 이용한 방식

// const arr = [123,1234,4444,5555,113];
// function nums(num){return num <= 1000};
// const arrFilter = arr.filter(nums);
// arrFilter = [123,113]; 출력
