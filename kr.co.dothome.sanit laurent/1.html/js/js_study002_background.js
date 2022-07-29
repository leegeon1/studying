
// const content = "안녕하세요. 개발자를 꿈꾸는 이건입니다.";
// const text = document.querySelector(".text");
// let index = 0;


// function sleep(delay){
//     const start = new Date().getTime();
//     while(new Date().getTime() < start + delay); // 여기에 조건으로 start를 넣으면 안되는 이유가 뭘까
// };

// function typing(){
//     text.textContent += content[index++];
//     if(index > content.length){
//         text.textContent = "";
//         index = 0;
//         sleep(3000);
//     };
// };
// setInterval(typing,200);

const images = ["0.jpg","1.jpg","2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./images/image2/${chosenImage}`;

document.body.appendChild(bgImage);




// const colors = [
//     "#ef5777",
//     "#575fcf",
//     "#4bcffa",
//     "#34e7e4",
//     "#0be881",
//     "#f53b57",
//     "#3c40c6",
//     "#0fbcf9",
//     "#00d8d6",
//     "#05c46b",
//     "#ffc048",
//     "#ffdd59",
//     "#ff5e57",
//     "#d2dae2",
//     "#485460",
//     "#ffa801",
//     "#ffd32a",
//     "#ff3f34"
//   ];
//   const btn = document.querySelector("button");
//   const body = document.querySelector("body");
//   function ClickBg() {
//     const bgc1 = colors[Math.floor(Math.random() * colors.length)];
//     const bgc2 = colors[Math.floor(Math.random() * colors.length)];
//     body.style.backgroundImage = `linear-gradient(0.25turn,${bgc1},${bgc2})`;
//   }
  
//   btn.addEventListener("click", ClickBg);

// 무작위로 image를 선택하여 html body에 추가하는 것을 구현하였다.

// quote와 동일한 방법으로 image 정보를 담고 있는 array를 만들고, 무작위 index를 통해 하나의 image를 선택한 후 img tag를 생성하여 선택된 img의 경로를 추가하여 구현하였다.

// document.createElement("element") : element의 요소를 document에 추가한다.
// document.body.appendChild("element") : body에 element를 추가한다. / JS를 통해서 body에 html tag를 만듦.








