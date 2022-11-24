// const name1 = "hono";
// console.log(name1);

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

function func(str) {
  return str;
}
console.log(func("funcです。"));

const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

const func2 = (str) => {
  return str;
};
// returnの省略
const func4 = (str) => str;
console.log(func4("func4です。"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
