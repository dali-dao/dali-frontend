import React from 'react'
import Slide_1 from '../assets/MainPage/slide_1.png'
import Slide_2 from '../assets/MainPage/slide_2.png'
import Slide_3 from '../assets/MainPage/slide_3.png'
const Carousal = require('3d-react-carousal')

export default function MultiCurosel() {
  let slides = [<img src={Slide_1} alt="1" />, <img src={Slide_2} alt="2" />, <img src={Slide_3} alt="3" />]
  return (
    <div className="App">
      <Carousal.Carousel slides={slides} autoplay={false} />
    </div>
  )
}
