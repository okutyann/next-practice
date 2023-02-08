import React from "react";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";

export const SerchInput = () => {
  return (
    <div>
      <input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};

export default SerchInput;
