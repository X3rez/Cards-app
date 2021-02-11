import styles from '../styles/Navbar.module.css'

import Link from "next/link";

import { Pivot as Hamburger } from 'hamburger-react'

import { useEffect, useState } from 'react';



const Navbar = () => {
    const [isOpen,setOpen] = useState<boolean>(false)


    return (
        <nav>
            <section className={styles.nav__hamburger}>
                <ul className={`${isOpen ? styles.nav__hamburger__open : styles.nav__hamburger__open + " " + styles.nav__hamburger__close}`}>
                    <li className={styles.nav__hamburger__li}><Link href="/">HOME</Link></li>
                    <li className={styles.nav__hamburger__li}><Link href="/MyCards">MY CARDS</Link></li>
                    <li className={styles.nav__hamburger__li}><Link href="/WhoAreWe">WHO ARE WE</Link></li>
                </ul>    
                
                <div className={styles.nav__button}>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
                </div>
            </section>
            <ul className={styles.nav__container} >
                <li className={styles.nav__li}><Link href="/">HOME</Link></li>
                <li className={styles.nav__li}><Link href="/MyCards">MY CARDS</Link></li>
                <li className={styles.nav__li}><Link href="/WhoAreWe">WHO ARE WE</Link></li>
            </ul> 
        </nav>
    )
}

export default Navbar
