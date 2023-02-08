import React from "react";

export const UserIConWithName = (image, name) => {
  return (
    <div>
      <img height={160} src={image} alt="プロフィール" />
      <p>{name}</p>
    </div>
  );
};

export default UserIConWithName;
