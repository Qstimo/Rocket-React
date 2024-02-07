import React from 'react'
import cls from './Accordion.module.scss'
import { classNames } from '../helpers/Classnames/classnames'
import checkSvg from './assets/icon/check_svg.svg'

interface indexProps {
    ans: string[],
    qwest: string,

}
export const Accordion = ({ ans, qwest }: indexProps) => {
    const [isActiveAccordion, setIsActiveAccordion] = React.useState(false);
    return (<>
        <li
            onClick={() => setIsActiveAccordion(prev => !prev)}
            key={qwest}
            className={cls.item}>
            <p className={cls.item_title}> {qwest}</p>
            <div
                className={classNames(cls.item_answer, { [cls.item_answer_active]: isActiveAccordion }, [])}>
                {ans.map(e => <p className={cls.item_answer_text}> {e}</p>)}
            </div>
            <button className={classNames(cls.item_click, { [cls.item_click_active]: isActiveAccordion }, [])}>
                <span />
            </button>
        </li>
    </>
    )
}