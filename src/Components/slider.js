// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"


// function ImageSlider()
// {
//     let settings = {
    
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         cssEase: "linear",
//         arrows:true,
//         focusOnSelect:true,
//         // pauseOnFocus:true,
//         pauseOnHover:true,
//         pauseOnDotsHover:true,
//         swipeToSlide:true,
//         touchMove:true,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//     }
//     return(
//        <Slider {...settings}>
//            <div className="card-wrapper">
//                <div className="card">
//                    <div className="card-image ">
//                        <img src="image/img1.jpg"></img>
//                    </div>
//                </div>
//            </div>
//            <div className="card-wrapper">
//                <div className="card ">
//                    <div className="card-image">
//                        <img src="image/img1.jpg"></img>
//                    </div>
//                </div>
//            </div>
//            <div className="card-wrapper">
//                <div className="card">
//                    <div className="card-image">
//                        <img src="image/img1.jpg"></img>
//                    </div>
//                </div>
//            </div>
//            <div className="card-wrapper">
//                <div className="card">
//                    <div className="card-image">
//                        <img src="image/img1.jpg"></img>
//                    </div>
//                </div>
//            </div>
//            <div className="card-wrapper">
//                <div className="card">
//                    <div className="card-image">
//                        <img src="image/img1.jpg"></img>
//                    </div>
//                </div>
//            </div>
//            <div className="card-wrapper">
//                <div className="card">
//                    <div className="card-image">
//                        <img src="image/img1.jpg"></img>
//                    </div>
//                </div>
//            </div>
//        </Slider>
       
//     )
    
// }

// export default ImageSlider
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./css/App.css"
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="images/react.png" />
        </div>
        <div className="title_">
          <span>React</span>Swiper Slider
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}










