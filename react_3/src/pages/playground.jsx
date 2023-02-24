import { Header } from "@/components/Header";
import { Practice } from "@/components/Practice";
import Head from "next/head";

const Playground = (props) => {
  return (
    <div>
      <Head>
        <title>Playground Page</title>
      </Head>
      <Header />
      <Practice />
    </div>
  );
};

export default Playground;
