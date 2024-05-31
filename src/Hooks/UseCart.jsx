import { useQuery } from "@tanstack/react-query";
import UseAxiousSequre from './UseAxiousSequre';
import useAuth from "./useAuth";



const UseCart = () => {
    const axiosSecure = UseAxiousSequre();
    const {user} = useAuth();
  
    const {refetch, data: cart =[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn:async() =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;

        }

    })
    return [cart ,refetch]
};

export default UseCart;