import Head from 'next/head'
import Signup from '../components/Signup'

export default function SignUp() {

  return(
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="homepage" content="Landing page of asyncroknights web-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup/>
    </>

  )

}