import * as C from './styles'

import pp1 from '../../../public/assets/pp1.jpeg'
import pp2 from '../../../public/assets/pp2.jpeg'
import pp3 from '../../../public/assets/pp3.jpeg'
import pp4 from '../../../public/assets/pp4.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ComoComprar() {
  const slides = [pp1, pp2, pp3, pp4]
  return (
    <C.Container>
      <Swiper
        className="slide-container"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </C.Container>
  )
}

export default ComoComprar
