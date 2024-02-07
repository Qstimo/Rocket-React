import React from 'react'
import cls from './Aside.module.scss'
import videoPrew from './assets/img/video_prew.jpg'
import videoPrewMob from './assets/img/video_prew_mob.jpg'
import PlayIc from './assets/img/play_btn.svg'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
import qwestMen from './assets/img/qwest_men.png'
import { Accordion } from '../../../components/Accordion'


const qwestArray = [
    {
        qwest: 'Заголовок часто задаваемого вопроса',
        ans: ["Blandit et et ac non interdum odio tristique diam vestibulum. Velit in quis consequat lacus fringilla amet elementum pharetra massa. Morbi euismod nulla cras adipiscing tristique aliquet purus adipiscing. "]

    },
    {
        qwest: 'Заголовок часто задаваемого вопроса с двумя абзацами ',
        ans: [" Enim lectus pretium pellentesque dignissim nam massa justo dolor. Lectus pharetra molestie ac urna lorem. Nibh et vestibulum ullamcorper elit.", " Это предложение должно здесь быть. Massa arcu volutpat blandit augue nibh nisl fames. Sodales pharetra nisi quis purus lacinia. Sapien cras posuere dolor tincidunt quis sed adipiscing. "]
    },
    {
        qwest: 'Заголовок часто задаваемого вопроса',
        ans: [' Nunc mi purus semper quam. Tincidunt magna neque rutrum sollicitudin dui hendrerit sed. Ipsum fusce volutpat eu pretium morbi dictum et bibendum. Purus tellus sit vel sed amet commodo volutpat sed et. Nibh aliquam ornare fermentum consequat ultrices arcu. ']
    },
    {
        qwest: 'Заголовок часто задаваемого вопроса',
        ans: [' Tellus pharetra lorem placerat tortor pharetra. Faucibus diam egestas commodo rhoncus vitae tristique. Adipiscing ultricies gravida nunc nisi at ipsum enim lobortis a. Est risus est commodo nibh. In leo nisi nunc elit luctus nisl praesent. Nibh placerat dui in adipiscing fringilla auctor purus id augue. Viverra libero sit commodo sit aliquet massa euismod. ']
    },

]

export const Aside = () => {
    return (
        <div className={cls.Aside}>
            <div className={cls.FAQ}>
                <div className="content">
                    <div className={cls.FAQ_container}>
                        <div className={cls.FAQ_list}>
                            <h2>Часто задаваемые вопросы</h2>
                            <ul>
                                {qwestArray
                                    .map(e => <Accordion key={e.qwest} qwest={e.qwest} ans={e.ans} />)
                                }
                            </ul>
                        </div>

                    </div>
                </div></div>
        </div>
    )
}