import { useEffect, useState } from "react";
import Sectiontitle from "../Componants/Sectiontitle";

import MenuItemCard from "../Shared/MenuItemCard";


const PopularMenu = () => {
    const [menu ,setMenu] =useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems =data.filter(item =>item.category === 'popular')
            console.log(popularItems)
            setMenu(popularItems)
        })
    },[])
    return (
        <div>
             <Sectiontitle
            subHeading={'Popular Items  '}
            heading={'From Our Menu'}
            >
            </Sectiontitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {
                    menu.map(item => <MenuItemCard key={item._id} item={item} ></MenuItemCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;