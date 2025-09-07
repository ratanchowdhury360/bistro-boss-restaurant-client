import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ManuCategory from "../ManuCategory/ManuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <h3>Our menu</h3>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"Don't miss"} heading={"Todays Offered"}></SectionTitle>
            {/* offered manu item */}
            <ManuCategory items={offered} > </ManuCategory>
            {/* dessert manu item */}
           <ManuCategory

            items={desserts} 
            title={"Dessert"}
            img={dessertImg} 
            ></ManuCategory>

            {/* pizza menu item */}
            <ManuCategory
            items={pizza} 
            title={"Pizza"}
            img={pizzaImg} 
            ></ManuCategory>

            {/* salad menu item */}
            <ManuCategory
            items={salad} 
            title={"Salad"}
            img={saladImg} 
            ></ManuCategory>

            {/* soup menu item */}
            <ManuCategory
            items={soup}
            title={"Soup"}
            img={soupImg} 
            ></ManuCategory>



        </div>
    );
};

export default Menu;