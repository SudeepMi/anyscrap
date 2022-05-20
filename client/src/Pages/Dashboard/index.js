import React,{ useEffect } from 'react'
import Api from '../../utils/Api'
import User from '../../utils/User'
import Sidebar from '../../components/Sidebar'

function Dashboard() {
    const [user, setUser] = React.useState({})
    useEffect(() => {
        const user = User()
        if(user.token){
            Api.get('/users/profile').then(res => {
                setUser(res.data)
            }).catch(err => {})
        }
        
    }, [])
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <Sidebar user={user} />
            </div>
            <div className='col-8'>
               
            </div>
        </div>
       
    </div>
  )
}

export default Dashboard