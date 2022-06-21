import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setFoo] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setFoo(count => count + 1)
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内 で入力してください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisply = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  },[]);

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = 'lightpink';
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisply}>非表示</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
