import React from "react";

export const ChildArea = ({ open }) => {
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
