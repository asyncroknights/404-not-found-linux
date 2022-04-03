import React from 'react'
import Head from 'next/head'
import Dashboard from '../../components/Dashboard'

export default function dashboard() {
    return (
    <>
        <Head>
            <title>Dashboard</title>
        </Head>
        <Dashboard/>
    </>
  )
}