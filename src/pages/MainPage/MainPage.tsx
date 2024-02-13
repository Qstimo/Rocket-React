import React from 'react'
import cls from './MainPage.module.scss'
import { classNames } from '../../components/helpers/Classnames/classnames'
import { WelcomePage } from '../../modules/WelcomePage'
import { Aside } from '../../modules/Aside'
import { FormList } from '../../modules/Form'
import img_1 from './assets/img/img_1.png'
import MySwiper from '../../components/swiper/Swiper'
import Slider from '../../components/swiper/Swiper'
import { useText } from '../../app/providers/TextContext'

interface MainPageProps {
    className?: string
}

export const MainPage = ({ className = '' }: MainPageProps) => {
    const { text } = useText()
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <WelcomePage />
            <Aside />
            <Slider sliders={text?.swiper} />
        </div>
    )
}