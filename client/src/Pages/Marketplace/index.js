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
    <div className='container mt-5'>
        <p
        className='text-center'
        >This section is PUBLIC platform for sharing free APIs</p>
        <div className='row'>
        {
           api &&  api.map(api => {
                return (
                    <div className='col-md-6' key={api._id}>
                    <div className="card" key={api._id}>
                        <div className='card-header'>
                            <h5 className="card-title">{api.name}</h5>
                        </div>
                        <div className="card-body">
                        <p>{api.description}</p>
                        <p>{api.endpoint}</p>
                        <p>Added By : {
                            api.userid.username
                            }</p>
                    </div>
                    </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Marketplace