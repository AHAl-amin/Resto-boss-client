
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../assets/shop/banner2.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import DessertImg from '../assets/menu/dessert-bg.jpeg'

import PopularMenu from './PopularMenu';
import UseMenu from '../Hooks/UseMenu';
import Sectiontitle from '../Componants/Sectiontitle';
import MenuCategory from './MenuCategory';

const Menu = () => {

    const [menu] =UseMenu();
    const dessert =menu.filter(item =>item.category === 'dessert')
    const soup =menu.filter(item =>item.category === 'soup')
    const salad =menu.filter(item =>item.category === 'salad')
    const pizza =menu.filter(item =>item.category === 
        'pizza')
    const 
    offered =menu.filter(item =>item.category === 
        'offered')
    return (
        <div>
            <div>
                <Helmet>
                <title>Restro Boss/Menu</title>
                </Helmet>
            </div>
            
            <Cover img={menuImg} title="Our menu">
             
            </Cover>
            <Sectiontitle subHeading="Don't miss" heading=' Today Offered'></Sectiontitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title='dessert' img={DessertImg}></MenuCategory>

            <MenuCategory items={soup}  title={'soup'}
            img={soupImg}></MenuCategory>
          
            <MenuCategory items={salad}  title={'salad'} 
            img={saladImg}></MenuCategory>
          
            <MenuCategory items={pizza}  title={'pizza'} 
            img={pizzaImg}></MenuCategory>
          
        </div>
    );
};

export default Menu;