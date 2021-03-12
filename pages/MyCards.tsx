import {useEffect, useState} from 'react'

import Navbar from '../components/Navbar'

import Head from 'next/head'

import Card from '../components/Card'

import Modal from '../components/Modal'

import styles from '../styles/MyCards.module.css'

import {BiMessageSquareAdd} from 'react-icons/bi'

import {IconContext} from 'react-icons'

import Loader from "react-loader-spinner";

const MyCards = () => {
    const [show, setShow] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)
    const [cards,setCards] = useState<[]>([])
    const handleAddCard = ()=>{
        setShow(!show)
    }

    const getCards = async()=>{
        setLoading(true)
        const res = await fetch("https://cards-app-backend.herokuapp.com/getcard")
        const resjson = await res.json()
        setCards(resjson)
        setLoading(false)
    }

    useEffect(()=>{
        getCards()
    },[show])
    
    return (
        <>
            <Head>
                <title>My Cards</title>
            </Head>

            <header>
                <Navbar />
            </header>
            
            <main className={styles.main}>

            <IconContext.Provider value={{ className:styles.button}}>
                    <BiMessageSquareAdd onClick={handleAddCard} />
            </IconContext.Provider>

            
                <section className={styles.cards__container}>

                    {show && <Modal setShow={setShow}/>} 
                    
                    {loading 
                            ? <Loader
                                    type="Puff"
                                    color="#77dd77"
                                    height={100}
                                    width={100}/> 
                            : cards["cards"] && cards["cards"].map(el => <Card front={el.front} back={el.back} image={el.imageURL} id={el._id} key={el._id}/> )}                    
                </section>
            </main>
        </>
    )
}

export default MyCards
