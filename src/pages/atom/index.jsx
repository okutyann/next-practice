import React from "react";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../../components/atoms/button/SecondaryButton";
import { SerchInput } from "../../components/molecules/SerchInput";
import { UserCard } from "../../components/Organisms/user/UserCard";

const user = {
  name: "ホノカ",
  image: "https://source.unsplash.com/2JcixB1Ky3I",
  email: "h190@gmail.com",
  phone: "090-000-999",
  company: {
    name: "テスト株式会社",
  },
};

export default function index() {
  return (
    <>
      <div>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SerchInput></SerchInput>
        <UserCard user={user}></UserCard>
      </div>
    </>
  );
}
