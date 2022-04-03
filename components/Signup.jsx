import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

import styles from '../styles/Login.module.css'

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let passMatch = false

        for(const key in password) {
            if(password.key === password2.key && password[key] === password2[key]) {
              passMatch = true
            }
        }
        if(!passMatch) {
            toast.error('Passwords do not match!')
        }else{
          axios.post('/api/registerUser', formData)
          .then((data) => {
            toast.success("Sign Up success")
          })
          .catch((error) => {
            console.log(error.response.data.error)
            toast.error(error.response.data.error)
          })
        }
  }

  return (
    <div >
      <main className={styles.maincontainer}>
        <section className={styles.card}>
          <h2>SIGN UP</h2>
          <form onSubmit={onSubmit}>
              <section className={styles.formSection}>
                <label htmlFor="name">Name : </label><input value={name} type="text" id='name' name='name' placeholder='John Doe' required onChange={onChange}/>
              </section>
              <section className={styles.formSection}>
                <label htmlFor="name">Email : </label><input value={email} type="email" id='email' name='email' placeholder='johndoe@example.com' required onChange={onChange}/>
              </section>
              <section className={styles.formSection}>
                <label htmlFor="name">Password : </label><input value={password} type="password" id='password' name='password' placeholder='Enter password... ' required onChange={onChange}/>
              </section>
              <section className={styles.formSection}>
                <label htmlFor="name">Password : </label><input value={password2} type="password" id='password2' name='password2' placeholder='Confirm password... ' required onChange={onChange}/>
              </section>
              <section className={styles.btns}>
                <button type='reset' className={`${styles.btn} ${styles.darkbtn}`}>Clear</button>
                <button type="submit" className={`${styles.btn} ${styles.lightbtn}`} onClick={onSubmit}>Submit</button>
              </section>
          </form>
        </section>
      </main>
      <ToastContainer toastStyle={{background: "#191919"}}
        />
    </div>
  )
}

export default Signup