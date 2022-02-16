import styles from '../../../styles/Header/Navigation.module.scss';

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
                <li>首頁</li>
                <li>關於筧燭</li>
                <li>燭球系列</li>
                <li>設計師系列</li>
                <li>燭台系列</li>
                <li>配件</li>
                <li>聯絡我們</li>
            </ul>


            <div className={styles.hamburger}>
                <FontAwesomeIcon icon={faBars} size="lg" onClick={open} />
            </div>


            <div className={`${styles.menu_container} ${isActive ? "styles.menu_active" : ""}`}>
                <div className={styles.menu}></div>
            </div>

        </div>
    )
}

// const Show = () => (
//     <div className={styles.show_menu}>
//         test
//     </div>
// )
export default Navigation