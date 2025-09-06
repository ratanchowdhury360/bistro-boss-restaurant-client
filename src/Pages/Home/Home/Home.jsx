import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Details from "../Details/Details";
import Featured from "../Featured/Featured";
import Popular from "../Popular/Popular";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
         <div>
            <Banner></Banner>
            <Category></Category>
            <Details></Details>
            <Popular></Popular>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;