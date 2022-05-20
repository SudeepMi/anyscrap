import axios from 'axios'
export default  axios.create({
    baseURL: 'http://localhost:5000/api/',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })


