import { useState } from 'react';
import orderBanner from '../assets/shop/banner2.jpg'
import Cover from './../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../Hooks/UseMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const Categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = Categories.indexOf(category)
    const [tabindex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category ===
        'pizza')
    const drinks = menu.filter(item => item.category ===
        'drinks')
    return (
        <div className=''>
            <div>
                <Helmet>
                    <title>Restro Boss/Order food</title>
                </Helmet>
            </div>
            <Cover img={orderBanner} title='Order food'></Cover>
            <div className='mt-10'>
                <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;