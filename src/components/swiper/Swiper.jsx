/* eslint-disable import/no-anonymous-default-export */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.scss';
import 'swiper/css';
import { Button } from '../../UI/Button';
import { ButtonTheme } from '../../UI/Button/ui/Button';
import bgImg from './assets/img/bg_desc.png';
const list = [
  'Гормональный скрининг',
  'Тестостерон',
  'Свободный тестостерон',
  'Глобулин, связывающий половые гормоны',
];
const Slider = ({ sliders = [] }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {sliders?.map((slider, i) => (
        <SwiperSlide key={i}>
          <div className="swiper_container">
            <div className="swiper_content_text">
              <img src={bgImg} alt="" />
              <h3>Check-UP</h3>
              <h4>для мужчин</h4>
              <ul>
                {list.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
              <div className="">
                <p>Всего 2800₽ </p> <span>3500₽</span>
              </div>
              <div className="">
                <Button theme={ButtonTheme.GREEN}>Записаться</Button>
                <Button theme={ButtonTheme.CLEAR_GREEN}> Подробнее</Button>
              </div>
            </div>
            <img className="swiper_content_img" src={slider.img} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
