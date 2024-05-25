
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
         <Helmet>
         <title>Restru Boss/Home</title>
         </Helmet>
            <div>
                <Banner></Banner>

                <Category></Category>
                <PopularMenu></PopularMenu>
                <Feature></Feature>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;