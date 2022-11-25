// const name1 = "hono";
// console.log(name1);

/*
 *テンプレート文字列
 */
// const animal = {
//   name: "usagi",
//   age: 12,
// };
// console.log(animal);
// animal.name = "tori";
// console.log(animal);

// const name2 = "honoka";
// const age = 24;
// const message1 = "私の名前は" + name2 + "です。年齢は" + age + "です。";
// const message2 = `私の名前は${name2}です。年齢は${age}です。`;

/* 
＊アロー関数 
*/

// function func(str) {
//   return str;
// }
// console.log(func("funcです。"));

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// const func2 = (str) => {
//   return str;
// };
// // returnの省略
// const func4 = (str) => str;
// console.log(func4("func4です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/* 
＊分割代入 
*/

// const myPofile = {
//   name1: "honoka",
//   age: 24,
// };
// const myPofile2 = {
//   name1: "humi",
//   age: 26,
// };
// const message1 = `私の名前は${myPofile.name1}です。年齢は${myPofile.age}歳です。`;
// console.log(message1);

// //これはできない
// const { name1, age } = myPofile;
// // const { name1, age } = myPofile2;

// const message2 = `私の名前は${name1}です。年齢は${age}歳です。`;
// console.log(message2);

// const myPofile = ["達文", 27];
// const message3 = `名前は${myPofile[0]}で年齢は${myPofile[1]}`;
// console.log(message3);

// const [name, age] = myPofile;
// const message4 = `名前は${name}です。${age}です`;
// console.log(message4);

/*
 *デフォルト値、引数
 */
const sayHello = (name1 = "ゲスト") => console.log(`こんにちは${name1}さん`);
sayHello();
