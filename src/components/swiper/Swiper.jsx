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
import { useModal } from '../../app/providers/ModalContext';

const Slider = ({ sliders = [] }) => {
  const { toggleModal } = useModal();

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
          <SlidePrevButton />
          <SlideNextButton />
        </div>
        {sliders?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div className="swiper_container">
              <div className="swiper_content_text">
                <img src={bgImg} alt="" />
                <h3>{slider.title}</h3>
                <h4>{slider.subtitle}</h4>
                <ul className="swiper_content_list">
                  {slider.list.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
                <div className="swiper_content_text_price">
                  <p>Всего: {slider.price}₽ </p> <span>{slider.subprice}₽</span>
                </div>
                <div className="swiper_content_btn">
                  <Button onClick={toggleModal} theme={ButtonTheme.GREEN}>
                    Записаться
                  </Button>
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
