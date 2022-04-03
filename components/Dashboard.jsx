import React, {useContext} from 'react'
import AppContext from './AppContext'

function Dashboard() {
    const context = useContext(AppContext)
  return (
    <>
        <div>Dashboard</div>
        <div>User Name : {context.user.name}</div>
        <div>User Email : {context.user.email}</div>
    </>
  )
}

export default Dashboard