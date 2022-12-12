import React from "react";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../../components/atoms/button/SecondaryButton";
import { SerchInput } from "../../components/molecules/SerchInput";
import { UserCard } from "../../components/Organisms/user/UserCard";

export default function index() {
  return (
    <>
      <div>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SerchInput></SerchInput>
        <UserCard></UserCard>
      </div>
    </>
  );
}
