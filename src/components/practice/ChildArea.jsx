import React from "react";

export const ChildArea = ({ open }) => {
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
};

export default ChildArea;
