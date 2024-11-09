import styles from '../../../styles/Footer/Footer.module.scss'

import Contact from './Contact'
import ContactInfo from './ContactInfo'

const Footer = ({ en_title, ch_title, content }: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.contact_block}>
                <Contact
                    en_title={en_title}
                    ch_title={ch_title}
                    content={content}
                />
            </div>

            <div className={styles.information_block}>
                <ContactInfo />

                <div className={styles.blank_area}></div>
            </div>


            <div className={styles.copyright}>
                Copyright &copy; 2021 All Rights Reserved by Reminis Candēre
            </div>
        </div>
    )
}

export default Footer