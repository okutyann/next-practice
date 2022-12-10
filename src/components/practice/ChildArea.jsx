import React from "react";
import { memo } from "react";

export const ChildArea = memo(({ open }) => {
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("ChildAreaがレンダリングされた");
  });
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
