import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'  
})

const UseAxiousSequre = () => {
   return axiosSecure;
};

export default UseAxiousSequre;