import React from 'react'
import cls from './Aside.module.scss'
import videoPrew from './assets/img/video_prew.jpg'
import videoPrewMob from './assets/img/video_prew_mob.jpg'
import PlayIc from './assets/img/play_btn.svg'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
import qwestMen from './assets/img/qwest_men.png'
import { Accordion } from '../../../components/Accordion'
import { useText } from '../../../app/providers/TextContext'




export const Aside = () => {
    const { text } = useText()
    return (
        <div className={cls.Aside}>
            <div className={cls.FAQ}>
                <div className="content">
                    <div className={cls.FAQ_container}>
                        <div className={cls.FAQ_list}>
                            <h2>{text?.Asside.title}</h2>
                            <ul>
                                {text?.Asside.qwestArray
                                    .map(e => <Accordion key={e.qwest} qwest={e.qwest} ans={e.ans} />)
                                }
                            </ul>
                        </div>

                    </div>
                </div></div>
        </div>
    )
}