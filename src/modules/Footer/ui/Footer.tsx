import React from 'react'
import cls from './Footer.module.scss'
import Logo from '../assets/icon/logo_desc.svg'
import { menuArray } from '../../Header/ui/Header'
import instIc from '../assets/icon/instagram_desc.png'
import watsIc from '../assets/icon/whatsapp_desc.png'
import telegIc from '../assets/icon/telegram_desc.png'
import { Link } from 'react-router-dom'

const socialList = [
    { img: instIc, path: '/' },
    { img: watsIc, path: '/' },
    { img: telegIc, path: '/' },
]
export const Footer = () => {
    return (
        <footer className={cls.Footer}>
            <div className="content">
                <div className={cls.Footer_container}>
                    <img width={91.04} height={26.9} src={Logo} alt="Logo" />
                    <ul className={cls.Footer_link_list}>
                        {menuArray.map(e => <li><Link to={e.path}>{e.name}</Link></li>)}
                    </ul>
                    <ul className={cls.Footer_social_list}>
                        {socialList.map(e => <li><Link to={e.path}><img src={e.img} alt={e.path} /></Link></li>)}
                    </ul>
                </div>
            </div>
        </footer>
    )
}