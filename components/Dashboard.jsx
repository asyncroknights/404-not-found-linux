import React, {useContext} from 'react'
import AppContext from './AppContext'
import { useRouter } from 'next/router'

function Dashboard() {
    const context = useContext(AppContext)
    const router = useRouter()

    const {user} = router.query
  return (
    <>
        <div>Dashboard</div>
        <div>dashboard for user {user}</div>
        <div>User Name : {context.user.name}</div>
        <div>User Email : {context.user.email}</div>
    </>
  )
}

export default Dashboard