import {useState} from 'react'

import Navbar from '../components/Navbar'

import Head from 'next/head'

import Card from '../components/Card'

import Modal from '../components/Modal'

import styles from '../styles/MyCards.module.css'



const MyCards = () => {
    const [show, setShow] = useState<boolean>(false)

    const handleAddCard = ()=>{
        setShow(!show)
    }

    let lStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cards')):null
    
    return (
        <>
            <Head>
                <title>My Cards</title>
            </Head>

            <header>
                <Navbar />
            </header>
            
            <main className={styles.main}>

                <button className={styles.button} onClick={handleAddCard}>Add Card</button>

                <section className={styles.cards__container}>

                    {show && <Modal setShow={setShow}/>}

                    {lStorage && lStorage.map(el => <Card front={el.frontValue} back={el.backValue} /> )}                    
                </section>
            </main>
        </>
    )
}

export default MyCards
