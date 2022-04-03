import React, {useState, useEffect, useContext} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

import styles from '../styles/Login.module.css'
import AppContext from './AppContext';

function Login() {
  
  const router = useRouter()

  const context = useContext(AppContext)
  console.log(context)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }))
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    await axios.get('/api/loginUser', {params: {formData: formData}})
    .then((data) => {
      toast.success("Login successful")
      const user = data.data
      const {id, name, email} = user
      const newuser = {
        name: name,
        email: email
      }

      context.changeUser(newuser)

      router.push(`${id}/dashboard`)
    }).catch((error)=> {
      console.log(error)
      toast.error(error.response.data.error)
    })
    
  }

  const resetForm = () => {
    setFormData('')
  }


  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="homepage" content="Landing page of asyncroknights web-app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.maincontainer}>
        <section className={styles.card}>
          <h2>LOGIN</h2>
          <form onSubmit={onSubmit}>
              <section className={styles.formSection}>
                <label htmlFor="name">Email : </label><input value={email} type="email" id='email' name='email' placeholder='johndoe@example.com' required onChange={onChange}/>
              </section>
              <section className={styles.formSection}>
                <label htmlFor="name">Password : </label><input value={password} type="password" id='password' name='password' placeholder='Enter password... ' required onChange={onChange}/>
              </section>
              <section className={styles.btns}>
                <button type='reset' className={`${styles.btn} ${styles.darkbtn}`} onClick={resetForm}>Clear</button>
                <button type='submit' className={`${styles.btn} ${styles.lightbtn}`} onClick={onSubmit}>Submit</button>
              </section>
          </form>
        </section>
      </main>
      <ToastContainer toastStyle={{background: "#191919"}}/>
    </div>
  )
}

export default Login