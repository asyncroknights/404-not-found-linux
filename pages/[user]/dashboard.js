import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Dashboard from '../../components/Dashboard'

export default function dashboard() {

    const router = useRouter()

    const {user} = router.query
    return (
    <>
        <Head>
            <title>Dashboard</title>
        </Head>
        <div>dashboard for user {user}</div>
        <Dashboard/>
    </>
  )
}