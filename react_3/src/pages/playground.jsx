import { Header } from "@/components/Header";
import { Practice } from "@/components/Practice";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Playground = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground Page</title>
      </Head>
      <Header />
      <Practice />
    </div>
  );
};

export default Playground;
