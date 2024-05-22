import Sectiontitle from "../Componants/Sectiontitle";
import featureImg from '../assets/home/featured.jpg'
import './Feature.jsx'



const Feature = () => {

   
      
    return (
        <div >
            <Sectiontitle
                subHeading={'Check it out  '}
                heading={'Featur Item'}
            >
            </Sectiontitle>
            <div className="flex gap-6 justify-center my-10">
               <div>
               <img className="w-full" src={featureImg} alt="" />
               </div>
                <div className="space-y-4">
                    <p>Aug 20, 2029</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sed. Ipsa libero id maxime nam provident pariatur deleniti possimus quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, beatae facere nisi quibusdam ullam, cupiditate, commodi veniam velit incidunt possimus qui harum quae reprehenderit.</p>
                    <button className="btn btn-outline border-b-4 border-orange-300 border-0"> Order now</button>

                
                </div>

            </div>
        </div>
    );
};

export default Feature;