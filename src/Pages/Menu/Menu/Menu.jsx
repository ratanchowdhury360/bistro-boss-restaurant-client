import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <h3>Our menu</h3>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            
           
        </div>
    );
};

export default Menu;