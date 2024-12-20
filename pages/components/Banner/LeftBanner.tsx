import Image from 'next/image'
import logo_pattern from '../../../public/img/logo/logo_pattern.svg'
import ic_point from '../../../public/img/icon/ic_point@2x.png'
import styles from '../../../styles/Banner/LeftBanner.module.scss'

const LeftBanner = ({ promote_text, banner_title }: any) => {

    return (
        <div className={styles.left_container}>
            <div className={styles.main_title}>
                <Image src={logo_pattern} width="28.67" height="42" alt={''} />
                <span id={styles.en_subtitle}>{"Reminis Candēre"}</span>
                <span id={styles.ch_title}>{banner_title}</span>
            </div>

            <div className={styles.icon_main}>
                <Image src={ic_point} width="26.5" height="1" alt={''} />
            </div>

            <div className={styles.promote_text_area}>
                <span className={styles.promote_text}>{promote_text}</span>
            </div>


        </div>
    )
}

export default LeftBanner