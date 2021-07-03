// import Header from "./Components/Header";
// import ImageSlider from "./Components/slider";
// import Footer from "./Components/Footer";
// import "./css/App.css"
// import { createElement } from "react";
// function App() {
//   return (
//     <>
//       <Header />
//         <div className="container mt-3 carousel">
//         <h1 className="slider_title">Featured Courses</h1>
//         <ImageSlider />
//       </div>
//       <Footer />
//     </>
//   );
// }
// export default App;
import React, { Component }  from 'react';
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
        <div className="title_">
          <h2 className="md-5 text-center"><span>Featured Courses</span></h2>
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
          <img src="image/bollywooddance.jpg" />
          <div className="details">
          <p className="course-name text-center mt-1">Bollywood Dance
          <strong><h5 className="text-center">Full Course Price:</h5></strong>
          <h6>1599</h6>
          <button className="btn-danger  text-center">Know More</button></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/BeginneraRT.jpg" />
          <div className="details">
          <p className="course-name text-center mt-1">Beginner Art
          <strong><h5 className="text-center">Full Course Price:</h5></strong>
          <h6>1200</h6>
          <button className="btn-danger  text-center">Know More</button></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/classicaldance.jpg" />
          <div className="details">
          <p className="course-name text-center mt-1">Classical Dance
          <strong><h5 className="text-center">Full Course Price:</h5></strong>
          <h6>1599</h6>
          <button className="btn-danger text-center">Know More</button></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/classicalMusic.jpg" />
          <div className="details">
          <p className="course-name text-center mt-1">Classical Music
          <strong><h5 className="text-center">Full Course Price:</h5></strong>
           <h6>1399</h6>
          <button className="btn-danger  text-center">Know More</button></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/publicspeaking.jpg" />
          <div className="details">
          <p className="course-name text-center mt-1">Public Speaking
          <strong><h5 className="text-center">Full Course Price:</h5></strong>
           <h6>1499</h6>
          <button className="btn-danger text-center">Know More</button></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/singing.jpg" />
          <div className="details">
          <p className="course-name text-center mt-1">Rock Music
          <strong><h5 className="text-center">Full Course Price:</h5></strong>
          <h6>1399</h6>
          <button className="btn-danger text-center">Know More</button></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}



