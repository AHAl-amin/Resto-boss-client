import { NavLink } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItemCard from "../Shared/MenuItemCard";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {
                    items.map(item => <MenuItemCard key={item._id} item={item} ></MenuItemCard>)
                }
            </div>
            <NavLink to={`/order/${title}`}>
                <button className="btn btn-outline border-b-4 border-orange-300 border-0"> Order now</button>
            </NavLink>
        </div>
    );
};

export default MenuCategory;