import Head from "next/head";
import { Header } from "@/components/Header";
import { Users as UsersComponents } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <UsersComponents />
    </div>
  );
};
export default Users;
