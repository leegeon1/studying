const quotes = [
    {
        quote: "뛰어남이란 항상 더 잘 하려고 노력하는 데에서 나온 꾸준한 결과이다.",
        author: "Pat Riley"
    },
    {
        quote: "긴 인내 후의 실패는 충분히 노력하지 않은 것보다 훨씬 더 위대하다.",
        author: "George Eliot"
    },
    {
        quote: "성공의 이전에는 노력이 있음을 항상 기억하라. 심지어 사전에서도 그렇다.",
        author: "Sarah Ban Breathnach"
    },
    {
        quote: "당신의 최대 기적에 가장 가까울 때, 당신은 가장 최대 역경을 마주하게 될 것이다.",
        author: "Shannon L. Alder"
    },
    {
        quote: "천리길도 한 걸음부터.",
        author: "Lao Tzu"
    },
    {
        quote: "나는 실패한 적이 없다.그저 작동하지 않는 10,000개의 방법들을 발견했을 뿐이다",
        author: "Thomas A. Edison"
    },
    {
        quote: "질문은 누가 나를 허락하는가가 아니라, 누가 나를 멈추게 할 것인가이다.",
        author: "Ayn Rand"
    },
    {
        quote: "이 세상에서 당신은 오직 당신이 잡으려고 손을 뻗은 것만을 얻는다.",
        author: "Giovanni Boccaccio"
    },
    {
        quote: "모든 스트라이크는 나를 다음 홈런에 한층 더 가깝게 해준다.",
        author: "Babe Ruth"
    },
    {
        quote: "성공하기 전에는 항상 그것이 불가능한 것처럼 보이기 마련이다.",
        author: "Nelson Mandela"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


function randomText(){
    const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todayQuotes.quote;
    author.innerText = todayQuotes.author;

}
setInterval(randomText,3000);







// Math.random() * 10 < 10 이내의 숫자를 랜덤값으로 구해줌 (정수가 아니라서 정수값까지 구해야함) 

// 정수 구하는 함수 
// Math.round() < 1.1이 있으면 1로 돌려줌 1.2, 1.3, 1.4도 마찬가지 1.5부터는 2를 돌려줌 숫자에 반올림을 함
// Math.ceil() < ceil이 하는건 숫자를 천장(ceil)까지 높여줌 말 그대로 저 머리 꼭대기 천장까지 1.1은 2가됨 1.0만 1이 됨 1.01만 돼도 2를 반환
// Math.floor() < floor는 네가 걸어 다니는 마루(floor)까지 숫자를 내려줌 1.9는 1이되고 1.999도 1이됨

