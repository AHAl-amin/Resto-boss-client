
import Sectiontitle from "../Componants/Sectiontitle";

import MenuItemCard from "../Shared/MenuItemCard";
import UseMenu from "../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] =UseMenu();
    const popular =menu.filter(item =>item.category === 'popular')


    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems =data.filter(item =>item.category === 'popular')
    //         console.log(popularItems)
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <div>
             <Sectiontitle
            subHeading={'Popular Items  '}
            heading={'From Our Menu'}
            >
            </Sectiontitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {
                    popular.map(item => <MenuItemCard key={item._id} item={item} ></MenuItemCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;