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

// const { name1, age } = myPofile;
// const { name1: name2, age: age2 } = myPofile2;

// const message2 = `私の名前は${name1}です。年齢は${age}歳です。`;
// const message3 = `私の名前は${name2}です。年齢は${age2}歳です。`;
// console.log(message2);
// console.log(message3);

// const myPofile = ["達文", 27];
// const message3 = `名前は${myPofile[0]}で年齢は${myPofile[1]}`;
// console.log(message3);

// const [name, age] = myPofile;
// const message4 = `名前は${name}です。${age}です`;
// console.log(message4);

/*
 *デフォルト値、引数
 */
// const sayHello = (name1 = "ゲスト") => console.log(`こんにちは${name1}さん`);
// sayHello();

/*
 *スプレット構文
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列の結合、コピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// arr6[0] = 140;
// console.log(arr6);
// console.log(arr4); //スプレッド構文で参照元をコピーすると大丈夫

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//イコールで配列をコピーしてしまうと参照元が同じなため元の方も変わってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); //arr4の中身も変わっちゃうので不具合になる

/**
 * mapやfilterを使った配列処理
 */

// const nameArr = ["奥田", "片山", "逢見"];
//従来のfor文を使用した場合
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

/**
 * map
 */

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//nameArr.map((name, index) => console.log(`${index}は${name}です。`));

/**
 * filter
 */

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //余りが１になるもの（奇数）
// });
// console.log(newNumArr);

// const newNameArry = nameArr.map((name) => {
//   if (name === "奥田") {
//     return name;
//   } else {
//     return `${name}さん。`;
//   }
// });
// console.log(newNameArry);

/**
 * 三項演算子（Reactでよく使う）
 */
//ある条件　？　条件がtrueの時　：　条件がfalseの時
// const val1 = 1 > 0 ? "trueです。" : "falseです。";
// console.log(val1);

// //toLocaleString … カンマ区切りの数値に表示してくれる
// const num = "1300";
// //console.log(num.toLocaleString());

// //typeof … 型が何かを判断してくれる
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "１００を超えています。" : "許容範囲です。";
};
console.log(checkSum(30, 60));
