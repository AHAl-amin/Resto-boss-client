
import Banner from "./Banner";
import Category from "./Category";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;