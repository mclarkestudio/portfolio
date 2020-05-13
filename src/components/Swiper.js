import React from "react"
import Swiper from "react-id-swiper"
// Version <= 2.3.2
// import "react-id-swiper/lib/styles/css/swiper.css"
// Version >= 2.4.0
import "swiper/css/swiper.css"

const SimpleSwiper = () => (
  <Swiper>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
    <div>Slide 4</div>
    <div>Slide 5</div>
  </Swiper>
)

export default SimpleSwiper
