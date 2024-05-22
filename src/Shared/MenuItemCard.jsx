

const MenuItemCard = ({item}) => {
    const {name, image ,price ,recipe} =item;
    return (
        <div className="">
            <div className="flex gap-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image}  />
            <div>
                <p className="uppercase text-2xl">{name}-----------</p>
                <p>{recipe}</p>

            </div>
            <p className="text-orange-400">{price}</p>
    
        </div>
        </div>
    );
};

export default MenuItemCard;