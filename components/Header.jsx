import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import {BiLogInCircle} from 'react-icons/bi'
import {RiAccountCircleFill} from 'react-icons/ri'
function Header() {
  return (
    <header className={styles.header}>
        <h1><Link href='/'>ASYNCRO-KNIGHTS</Link></h1>
        <section className={styles.btns}>
            <Link href='/login'><button className={`${styles.btn} ${styles.lightbtn}`}>LOGIN <BiLogInCircle className={styles.loginIcon}/></button></Link>
            <Link href='/signup'><button className={`${styles.btn} ${styles.darkbtn}`}>SIGN UP <RiAccountCircleFill className={styles.signupIcon}/></button></Link>
        </section>
    </header>
  )
}

export default Header