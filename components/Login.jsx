import React, {useState} from 'react'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

import styles from '../styles/Login.module.css'

function Login() {

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
    console.log("User tried to login")
    const user = await axios.get('/api/loginUser', {params: {formData: formData}})
    .then((data) => toast.success("Login successful"))
    .catch((error)=> {toast.error(error.response.data.error)})
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
                <button type='reset' className={`${styles.btn} ${styles.darkbtn}`}>Clear</button>
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