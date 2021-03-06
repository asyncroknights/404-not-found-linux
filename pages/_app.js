import '../styles/globals.css'
import Header from '../components/Header'
import AppContext from '../components/AppContext'
import {useContext, useState} from 'react'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const changeUser = (newuser) => {
    setUser(newuser)
  }

  const settings = {
    user,
    setUser,
    changeUser
  }
  return (
  <AppContext.Provider value={settings}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </AppContext.Provider>
  )
}

export default MyApp
