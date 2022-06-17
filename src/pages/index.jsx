import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect } from 'react'

export default function Home() {
   const foo = 1;
   const handleClick = useCallback((e) =>{
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);

  useEffect (() => {
    console.log('マウント時に実行される');
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('あんマウント時に実行される');
      document.body.style.backgroundColor = 'lightpink';
    }
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <a href='/about' onClick={handleClick}>ボタン</a>
      <Header/>
      <Main page="index" />
      <Footer />
    </div>
  )
}
