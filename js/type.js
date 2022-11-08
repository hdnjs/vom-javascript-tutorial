// 프로그래밍 언어에서 다루는 모든 데이터는 각자의 형태를 지님. 즉, 타입이라 함
// 원시 타입: string, number, boolean, undefined, null
// 객체 타입: function, array, object

// const string = "hello world";
// console.log(string);
// ㄴ 1. 문자열(string)
// - '' 안에 작성되는 원시 값은 문자로 인식되고 이들의 나열이 문자열
// - 문자는 홀따옴표와 겹따옴표 어떤 것을 사용해도 되나, 따옴표 안에 다른 따옴표가 들어간다면 홀과 겹을 다르게 사용해야함

// type을 체크할 때는 typeof() 메소드를 사용함

const class1 = "header";
const tag = `<div class='${class1}'></div>`;
console.log(tag);

// 2. 템플릿 리터럴
// - 변수와 문자열을 함께 사용할 때 es6 버전부터는 + 기호없이 편리하게 조합할 수 있는 방식을 제공함
// - 전체 문자열을 백틱으로 감사고, 변수 부분을 ${} 안에 작성
