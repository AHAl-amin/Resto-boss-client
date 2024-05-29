

const FoodCard = ({item}) => {
    const {name , image ,price ,recipe}=item;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute p-2 right-0 mt-3 mr-3"> ${price}</p>
            <div className="card-body space-y-3">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-b-4 border-orange-300 border-0 bg-gray-200">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;