import React from "react";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../../components/atoms/button/SecondaryButton";

export default function index() {
  return (
    <>
      <div>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
      </div>
    </>
  );
}
