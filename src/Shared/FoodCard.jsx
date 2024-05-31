import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiousSequre from "../Hooks/UseAxiousSequre";




const FoodCard = ({item}) => {
    const {name , image ,price ,recipe ,_id}=item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiousSequre();


    const handleAddToCard = food =>{
        if(user && user.email){
            const cartItem = {
                menuID:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cards',cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "please login to add to the cart ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,login"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state:{from: location}})
                }
              });
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute p-2 right-0 mt-3 mr-3"> ${price}</p>
            <div className="card-body space-y-3">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={ () => handleAddToCard(item)} className="btn btn-outline border-b-4 border-orange-300 border-0 bg-gray-200">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;