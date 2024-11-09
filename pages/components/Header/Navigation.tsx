import styles from '../../../styles/Header/Navigation.module.scss';
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false)
    const open = () => {
        setIsActive(true)
    }
    const close = () => {
        setIsActive(false)
    }


    return (
        <div className={styles.container}>

            <ul>
                {/* <li><Link href="/"><a>首頁</a></Link></li> */}
                <li><Link href="#about" scroll={false}>關於筧燭</Link></li>
                <li><Link href="#waxmelt" scroll={false}>燭球系列</Link></li>
                <li><Link href="#crafter" scroll={false}>設計師系列</Link></li>
                <li><Link href="#holder" scroll={false}>燭台系列</Link></li>
                <li><Link href="#accessories" scroll={false}>輕體驗</Link></li>
                <li><Link href="#contactus" scroll={false}>聯絡我們</Link></li>
            </ul>


            {/* <div className={styles.hamburger}>
                <FontAwesomeIcon icon={faBars} size="lg" onClick={open} />
            </div> */}


            <div className={`${styles.menu_container} ${isActive ? "styles.menu_active" : ""}`}>
                <div className={styles.menu}></div>
            </div>

        </div>
    )
}

// close func

// const Show = () => (
//     <div className={styles.show_menu}>
//         test
//     </div>
// )
export default Navigation