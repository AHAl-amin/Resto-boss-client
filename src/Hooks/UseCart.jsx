import { useQuery } from "@tanstack/react-query";
import UseAxiousSequre from './UseAxiousSequre';



const UseCart = () => {
    const axiosSecure = UseAxiousSequre();
  
    const {data: cart =[]} = useQuery({
        queryKey:['card'],
        queryFn:async() =>{
            const res = await axiosSecure.get('/cards')
            return res.data;

        }

    })
    return [cart]
};

export default UseCart;