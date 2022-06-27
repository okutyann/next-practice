import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useColor } from 'src/hooks/useColor'

export default function Home() {
  const {count , isShow , handleClick , handleDisply} = useCounter();
  const {text , array , handleChange , handleAdd} = useInputArray();
  useColor();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisply}>非表示</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  )
}
