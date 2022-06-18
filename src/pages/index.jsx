import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect , useState} from 'react'

export default function Home() {
  const [count, setFoo] = useState(1);
  //let foo =1;

  const handleClick = (e) =>{
    setFoo(count => count + 1)
  };

  useEffect (() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = 'lightpink';
    }
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Header/>
      <Main page="index" />
      <Footer />
    </div>
  )
}
