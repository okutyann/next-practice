import React from "react";
import { memo } from "react";

export const ChildArea = memo(({ open, onClickClose }) => {
  const data = [...Array(20).keys()];
  data.forEach(() => {
    console.log("ChildAreaがレンダリングされた");
  });
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
