import Sectiontitle from "../Componants/Sectiontitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../assets/home/01.jpg'
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'



const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className="my-10">
            <Sectiontitle
                subHeading={'whate our client say  '}
                heading={'Testimonials'}
            >
            </Sectiontitle>

            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {

                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-12 flex flex-col items-center space-y-4">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.Rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h2 className="text-2xl font-bold text-orange-300">{review.name}</h2>
                        </div>



                    </SwiperSlide>)

                }

            </Swiper>


        </div>
    );
};

export default Testimonial;