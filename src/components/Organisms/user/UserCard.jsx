import { UserIConWithName } from "../../molecules/user/UserIConWithName";

export const UserCard = ({ user }) => {
  return (
    <div>
      <dl>
        <UserIConWithName
          image={user.image}
          name={user.name}
        ></UserIConWithName>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
      </dl>
    </div>
  );
};
