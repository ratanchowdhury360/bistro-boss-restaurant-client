import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category);

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drink = menu.filter(item => item.category === 'drinks');
  

    return (
        <div>
            <Cover img={orderCoverImg} title={"Order Food"} ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={"flex justify-center mt-4 gap-4 text-center"}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}> </OrderTab>
                </TabPanel>
                <TabPanel>
                       <OrderTab items={pizza}> </OrderTab> 
                </TabPanel>
                <OrderTab items={soup}> </OrderTab>
                <TabPanel>
                    <OrderTab items={desserts}> </OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drink}> </OrderTab>
                </TabPanel>
               
            </Tabs>

        </div>
    );
};

export default Order;