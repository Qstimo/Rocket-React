/* eslint-disable import/no-anonymous-default-export */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '../../UI/Button';
import { ButtonTheme } from '../../UI/Button/ui/Button';
import bgImg from './assets/img/bg_desc.png';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useRef } from 'react';
import { SlideNextButton, SlidePrevButton } from './SlideButton';

const list = [
  'Гормональный скрининг',
  'Тестостерон',
  'Свободный тестостерон',
  'Глобулин, связывающий половые гормоны',
];
const Slider = ({ sliders = [] }) => {
  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        pagination={{ type: 'fraction' }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <div className="swiper_arrows">
          <SlidePrevButton></SlidePrevButton>
          <SlideNextButton></SlideNextButton>
        </div>
        {sliders?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div className="swiper_container">
              <div className="swiper_content_text">
                <img src={bgImg} alt="" />
                <h3>Check-UP</h3>
                <h4>для мужчин</h4>
                <ul className="swiper_content_list">
                  {list.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
                <div className="swiper_content_text_price">
                  <p>Всего 2800₽ </p> <span>3500₽</span>
                </div>
                <div className="swiper_content_btn">
                  <Button theme={ButtonTheme.GREEN}>Записаться</Button>
                  <Button theme={ButtonTheme.CLEAR_GREEN}> Подробнее</Button>
                </div>
              </div>
              <img className="swiper_content_img" src={slider.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
