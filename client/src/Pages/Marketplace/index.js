import React from 'react'
import Api from '../../utils/Api'

function Marketplace() {
 const [api, setApi] = React.useState([])

 React.useEffect(() => {
    Api.get('/endpoints/marketplace').then(res => {
        res.data && setApi(res.data)
    })
    }, [])
  return (
    <div className='container'>
        {
           api &&  api.map(api => {
               { console.log(api);}
                return (
                    <div className="card" key={api._id}>
                        <h1>{api.name}</h1>
                        <p>{api.description}</p>
                        <p>{api.endpoint}</p>
                        <p>Added By : {
                            api.userid.username
                            }</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Marketplace