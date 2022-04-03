import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import AppContext from '../../components/AppContext'

export default function dashboard() {

    const context = useContext(AppContext)
    const router = useRouter()

    const {user} = router.query
  return (
    <>
        <Head>
            <title>Dashboard</title>
        </Head>
        <div>dashboard for user {user}</div>
        <div>User Name : {context.user.name}</div>
        <div>User Email : {context.user.email}</div>
    </>
  )
}