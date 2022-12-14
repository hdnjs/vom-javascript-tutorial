// DOM 참조 : http://www.tcpschool.com/javascript/js_dom_concept

// DOM은 Document Object Model의 약자로 HTML 문서의 요소를 제어할 수 있도록 자바스크립트에서 제공하는 방식이다.
// HTML 문서는 태그와 노드가 계층 구조로 되어 있고, 상위 계층을 부모, 하위 계층을 자식으로 분류하여 접근할 수 있다.

// 1. 문서 객체 선택
// - document.body(head) : 문서의 body 객체를 선택할 수 있다.
// console.log(document.body);
// const bodyTag = document.body;
// console.log({ bodyTag });
// console.dir(bodyTag);
// - console.log의 경우 선택된 문서 객체를 객체 형식과 태그 형식을 번갈아 보여 준다. 하지만 문서를 제어하는데는 지장이 없다.
// - 객체 형식만 보고 싶다면 console.dir을 사용하거나 선택된 태그를 {} 에 감싸서 확인하면 된다. 이때 {}를 사용하기 위해서는 변수에 별도 저장하여 참조값을 사용해야 한다.

// - document.querySelector : 기존에는 아이디, 클래스, 태그를 선택할 때 각각 document.getElementById, getElementsByClass, getElementsByTagName을 사용했다.
// - es6버전부터 querySelector의 파라미터로 선택하고자 하는 요소의 css선택자 값을 작성하면 된다.

// - document.querySelectorAll : 아이디의 경우를 제외하고 클래스와 태그는 같은 이름으로 여러개 존재할 수 있다. 이때 같은 이름을 모두 선택할 때 사용한다.

// - 선택된 문서 객체 요소들은 반복 문법을 사용해서 접근할 수 있다.
// const liTags = document.querySelectorAll("li");
// console.log(liTags);

// for문으로 선택
// for (let i = 0; i < liTags.length; i++) {
//   console.log(liTags[i]);
// }

// foreach문으로 선택
// liTags.forEach((liTag) => {
//   console.log(liTag);
// });

// liTags.map((liTag) => {
//   // console.log(litag);
// });

// - 선택된 문서 객체는 유사배열이며 정확히 배열은 아니다. 따라서 map을 사용하려면 Array.from 메서드를 사용하여 배열로 변환한 후 사용해야 한다.
// const arrayTags = Array.from(liTags);
// console.log(arrayTags);

// arrayTags.map((liTag) => {
//   console.log(liTag);
// });

// 2. 텍스트 조작
// - textContent, innerHTML
// - textContent 속성은 입력된 문자열을 삽입하고, innerHTML 속성은 입력된 문자열을 HTML 형식으로 삽입한다.
// const aEl = document.querySelector("#a");
// const bEl = document.querySelector("#b");
// aEl.textContent = "<h1>insert text</h1>";
// textContent 문자열
// bEl.innerHTML = "<h1>insert text</h1>";
// innerHTML 태그 형태 유지 및 HTML 형식으로 삽입

// - innerText 속성을 사용한 경우도 있는데, 이는 과거에 사용되었던 텍스트 입력 방식이었지만 최근에는 textContent를 사용하고 있다.

// 3. 속성 조작
// - setAttribute(name, value) : 특정 속성에 값을 지정한다.
// - getAttribute(name) : 특정 속성을 조회한다.
// aEl.setAttribute("class", "a");
// const bElAttr = bEl.getAttribute("id");
// console.log(bElAttr);

// - 클릭하여 사진 바꾸기
// 1. DOM 요소 선택
const btns = document.querySelectorAll(".btn");
const img = document.querySelector(".img_box img");

// 2. 반복되는 버튼 요소 반복문으로 분리
// function changeImg() {
//   // 3. 클릭한 요소의 id값을 저장
//   const thisAttr = this.getAttribute("id");
//   //   alert(thisAttr);
//   // 4. img src를 thisAttr로 변경
//   const src = `${thisAttr}.jpg`;
//   img.setAttribute("src", src);
// }

const changeImg = (index) => {
  // 화살표 함수는 반복문에서 전달된 DOM 객체를 this로 전달받지 않고 전역 객체인 window가 선택된다.
  console.log(btns[index]);
  const thisAttr = btns[index].getAttribute("id");
  const src = `${thisAttr}.jpg`;
  img.setAttribute("src", src);
};

btns.forEach((btn, index) => {
  //   btn.addEventListener("click", changeImg);
  //   console.log(index);
  btn.addEventListener("click", () => changeImg(index));
});

// 4. 스타일 조작
// - 자바스크립트를 이용하여 스타일을 변경할 때 값은 따옴표 안에 문자열로 작성하여야 한다.
// - 숫자가 포함된 값의 경우 문자형 숫자로 작성하면 되고, 숫자로 작성할 경우 단위 문자열을 조합해야 한다.
// - tagElement.style.styleName = 'styleValue'
btns.forEach((btn) => {
  btn.style.background = "red";
});

// 5. 문서 객체 생성
// - document.createElement(DOM name) : 매개변수에 입력된 태그를 생성한다.
const h2Tag = document.createElement("h2");
h2Tag.textContent = "h2 Tag Insert";
console.log(h2Tag);

// 6. 문서 객체 삽입
// - parentDOMname.append(DOM name) : 매개변수로 선택된 객체가 부모 객체의 자식 뒤에 추가된다.
const insert = document.querySelector(".insert");
// insert.append(h2Tag);

// - parentDOMname.prepend(DOM name) : 매개변수로 선택된 객체가 부모 객체의 자식 앞에 추가된다.
insert.prepend(h2Tag);

// 7. 문서 객체 제거
// - DOMname.remove() : 선택된 문서객체를 삭제한다.
h2Tag.remove();
