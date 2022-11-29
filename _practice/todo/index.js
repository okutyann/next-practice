// import "styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  creatIncompleteList(inputText);
};

//未完了リストに要素追加
const creatIncompleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //完了に要素を追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.closest("li"));

    // // //div以下を削除
    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すタグの親タグを完了リストから削除
      const deleteTarget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      creatIncompleteList(text);
    });
    const li = document.createElement("li");

    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(li);

    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  //タグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
