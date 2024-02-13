import React from 'react'
import cls from './WelcomePage.module.scss'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
import bgDesc from '../assets/img/welcom_page_desc.png'
import bgMob from '../assets/img/welcom_page_mob.png'
import { useText } from '../../../app/providers/TextContext'
interface WelcomePageProps {
    className?: string
}
export const WelcomePage = ({ className }: WelcomePageProps) => {
    const { text } = useText()

    return (
        <div className={cls.WelcomePage}>
            <div className="content">
                <div className={cls.WelcomePage_img_container}>
                    <div className={cls.WelcomePage_img_container_text}>
                        <div className="">
                            <h1>{text?.welcomPage.title}</h1>
                            <p>{text?.welcomPage.subtitle}</p>
                        </div>
                    </div>
                    <picture className="">
                        <source srcSet={bgDesc} media="(min-width: 770px)" />
                        <img src={bgMob} alt="" />
                    </picture>
                </div>
            </div>
        </div >
    )
}
