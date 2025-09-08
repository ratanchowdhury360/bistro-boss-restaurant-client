import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                   <div className='grid md:grid-cols-3 gap-10 my-10 text-center'>
                     {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>
                        )
                    }


                   </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;