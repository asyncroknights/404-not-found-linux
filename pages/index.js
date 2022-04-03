import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AsyncroKnights</title>
        <meta name="homepage" content="Landing page of asyncroknights web-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.maincontainer}>
        <section className={styles.card}>
          <h2>Welcome to our Web Portal</h2>
          <p>The asyncroknights welcome you</p>
        </section>
      </main>
    </div>
  )
}
