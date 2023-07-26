import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '8b51a778514c489abefac3969fb2b1c6'
    }
})