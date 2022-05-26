import axios from 'axios'; 

const config = axios.create({ 
     baseURL: "http://localhost:2022/api"
})

export default config; 