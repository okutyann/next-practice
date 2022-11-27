// import "styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = inputText;
  li.appendChild(div);
  div.appendChild(p);
  document.getElementById("imcomplete-list").appendChild(li);
  //console.log(li);
};

let addButton = document.getElementById("add-button");
console.log(addButton);

addButton.addEventListener("click", () => onClickAdd());
