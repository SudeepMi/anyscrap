import React,{ useEffect } from 'react'
import Api from '../../utils/Api'
import User from '../../utils/User'
import Sidebar from '../../components/Sidebar'
import { toast } from 'react-toastify'

function Dashboard() {
    const [user, setUser] = React.useState({})
    const [api, setApi] = React.useState([])
    const [allApi, setAllApi] = React.useState([])
    useEffect(() => {
        const user = User().user
        setUser(user)
        Api.get('/endpoints/myapi').then(res => {
            res.data && setApi(res.data)
        })
        Api.get('/endpoints').then(res => {
            res.data && setAllApi(res.data)
        })

    }, [])

    const handleUse = (api) => {
        Api.post('/endpoints/use', {
            api_id:api
        }).then(res => {
            if (res.data) {
                setApi(res.data)
            }
        })
    }

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [endpoint, setEndpoint] = React.useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      alert("Submitted");
      const intToast = toast.loading("Creating")
      await Api.post("/endpoints/marketplace/", {
        name,
        description,
        endpoint,
      }).then(async (res) => {
        if (res.status === 201) {
          setName("");
          setDescription("");
          setEndpoint("");
          toast.dismiss(intToast);
          await toast.success("Successfully Created", {
            closeButton: false,
          });
        }
      }).catch((err) => {
        toast.dismiss(intToast);
        toast.error("Creation Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
    };

    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <Sidebar user={user} />
            </div>
            <div className='col-8'>
                Your APIS
               {
                     api.map(api  => {
                            return (
                                <div key={api.id}>
                                    <h2>{api?.api_id.name}</h2>
                                    <p>{api?.api_id.description}</p>
                                    <p>{api?.api_id.endpoint}</p>
                                    <p>API Key: { api.api_key }</p>
                                    <p>Total calls : { api.call || 0 }</p>
                                </div>
                            )
                        })
               }
               <h2>All APIs</h2>

{
                     allApi.map((api,index) => {
                            return (
                                <div key={index}>
                                    <h1>{api.name}</h1>
                                    <p>{api.description}</p>
                                    <p>{api.endpoint}</p>
                                    <button onClick={()=>handleUse(api._id)}>use API</button>
                                </div>
                            )
                        })
               }
            <div className=''>
                { !user.isAdmin && <div>
                    <h2>Contribute API endpoints on ANYSCRAP COMMUNITY</h2>
                    <div>
        <input type="text" placeholder="API Name" onChange={e=>setName(e.target.value) } />
        <textarea placeholder="API Description"
        onChange={
          e=>setDescription(e.target.value)
        } />
        <input type="text" placeholder="API Endpoint"
        onChange={
          e=>setEndpoint(e.target.value)
        } />
        <button onClick={handleSubmit}>Add API</button>
      </div>
                    </div>
                }
            </div>  
            </div>
        </div>
       
    </div>
  )
}

export default Dashboard