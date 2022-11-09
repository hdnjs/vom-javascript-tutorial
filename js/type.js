// 프로그래밍 언어에서 다루는 모든 데이터는 각자의 형태를 지님. 즉, 타입이라 함
// 원시 타입: string, number, boolean, undefined, null
// 객체 타입: function, array, object

// const string = "hello world";
// console.log(string);
// ㄴ 1. 문자열(string)
// - '' 안에 작성되는 원시 값은 문자로 인식되고 이들의 나열이 문자열
// - 문자는 홀따옴표와 겹따옴표 어떤 것을 사용해도 되나, 따옴표 안에 다른 따옴표가 들어간다면 홀과 겹을 다르게 사용해야함

// type을 체크할 때는 typeof() 메소드를 사용함

// const class1 = "header";
// const tag = `<div class='${class1}'></div>`;
// console.log(tag);

// ㄴ2. 템플릿 리터럴
// - 변수와 문자열을 함께 사용할 때 es6 버전부터는 + 기호없이 편리하게 조합할 수 있는 방식을 제공함
// - 전체 문자열을 백틱으로 감사고, 변수 부분을 ${} 안에 작성

// const a = 0.5;
// const b = 1;
// console.log(a);
// console.log(b);
// 3. 숫자(number)
// 숫자는 따옴표 없이 사용하며, 말 그대로 숫자를 사용함. 숫자 형태이므로 연산이 가능함
// 자바스크립트는 엔진이 타입을 추론하므로 별도의 선언문 없이 숫자, 문자, 객체 등의 타입을 지정할 수  있음
// 따라서 소수를 작성해도 숫자 타입으로 지정됨

// const c = "5";
// console.log(c);
// console.log(typeof c);
// console.log(typeof Number(c));
// 숫자를 작성할 때 따옴표 안에 작성하면 문자열로 변형됨
// 숫자형 문자를 숫자형으로 변경할때 Number() 메서드를 사용. 이와 같이 변경하는 것을 명시적 형변환이라 함

// const d = "7";
// console.log(c + d);
// console.log(d - c);
// 숫자형 문자는 + 의 경우 문자 연산이 되지만 나머지 연산은 엔진이 숫자로 임의 변경하여 연산함 이를 암묵적 형변환이라 함
// 암묵적 형변환된 데이터는 숫자형으로 변경돰

// const e = "marshall" * 30;
// console.log(e);
// ㄴ4. NaN
// 자바스크립트 엔진이 숫자형으로 인식하는 것 중에 특이한 것은 NaN임. 이는 Not a Number의 이니셜로 '숫자가 아님'이지만 숫자

// const f = true;
// console.log(f);
// console.log(typeof f);

// const yourAge = prompt();
if (yourAge >= 18) {
  document.write("당신은 성인입니다");
  document.write(yourAge >= 18);
} else {
  document.write("당신은 미성년자입니다");
  document.write(yourAge >= 18);
}
// ㄴ5. Boolean
// 컴퓨터는 모든 데이터를 0과 1로 읽음 이를 이용하여 true와 false를 나타내는 방식을 표현하는데 이를 boolean이라 함
// George Boole이라는 수학자가 고안해서 붙여진 이름
// 직접적으로 true와 false를 사용하는 경우도 있지만 대부분 한 로직이 여러가지 경우의 수에 따라 흐름을 달리할 때 사용함 (로그인 했을때와 아닐때 등)

// 6. undefined
// undefined 는 원시값(Primitive Type)으로, 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당됨

// 7. null
// undefined와 같이 비어있는 값이라는 의미는 같음
// 하지만 데이터의 타입은 undefined와 다름
// null 역시 false, 0, 빈값과는 다름
