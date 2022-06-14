import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/footer'
import { Main } from '../components/Main'
import { Header } from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main page="index" />
      <Footer />
    </div>
  )
}
