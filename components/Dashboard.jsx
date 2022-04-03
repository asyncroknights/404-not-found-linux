import React, {useContext} from 'react'
import AppContext from './AppContext'
import { useRouter } from 'next/router'
import styles from '../styles/Dashboard.module.css'

function Dashboard() {
    const context = useContext(AppContext)
    const router = useRouter()

    const {user} = router.query
  return (
    <section className={styles.maincontainer}>
        <div className={styles.card}>
            <h2>Dashboard </h2>
            <div>User Name : {context.user.name}</div>
            <div>User Email : {context.user.email}</div>
            </div>
    </section>
  )
}

export default Dashboard