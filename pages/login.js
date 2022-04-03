import Head from 'next/head'
import Login from '../components/Login'

export default function SignUp() {

  return(
    <>
      <Head>
        <title>Login</title>
        <meta name="homepage" content="Landing page of asyncroknights web-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
    </>

  )

}