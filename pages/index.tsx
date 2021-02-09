import Head from 'next/head'

import Navbar from '../components/Navbar'

import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TheEnglish - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.main__text}>welcome to TheEnglish</h1>
        <Link href='/MyCards'>
            <button className={styles.main__button}>Start Now</button>
        </Link>
      </main>
    </div>
  )
}
