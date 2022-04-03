import React, { useContext } from 'react'
import {signIn, signOut} from 'next-auth/react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import {BiLogInCircle} from 'react-icons/bi'
import {RiAccountCircleFill} from 'react-icons/ri'
import AppContext from './AppContext'

function Header() {
  const context = useContext(AppContext)
  let loginState

  context.user==''?loginState=false:loginState=true

  return (
    <header className={styles.header}>
        <h1><Link href='/'>ASYNCRO-KNIGHTS</Link></h1>
        <section className={styles.btns}>
            <Link href='/login' passHref><button className={`${styles.btn} ${styles.lightbtn}`}>LOGIN <BiLogInCircle className={styles.loginIcon}/></button></Link>
            <Link href='/signup' passHref><button className={`${styles.btn} ${styles.darkbtn}`}>SIGN UP <RiAccountCircleFill className={styles.signupIcon}/></button></Link>
        </section>
    </header>
  )
}

export default Header