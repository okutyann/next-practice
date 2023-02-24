import { Header } from "@/components/Header";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JsonPlaceholderのAPIで色々叩いてみるよ！</p>
    </div>
  );
};

export default Index;
