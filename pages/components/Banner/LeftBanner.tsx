import Image from 'next/image'
import logo_pattern from '../../../public/img/logo/logo_pattern.svg'
import ic_point from '../../../public/img/icon/ic_point@2x.png'
import styles from '../../../styles/Banner/LeftBanner.module.scss'

const LeftBanner = () => {
    const promote_text = "調香豆專為想要隨時調整、隨時調香的你，調出專屬於當下的香氣與氛圍。同樣的香氣，不同的比例，感受完全不同。隨手調整比例或配方，怎麼調都不脫離自身對於香氛的喜好"
    return (
        <div className={styles.left_container}>
            <div className={styles.main_title}>
                <Image src={logo_pattern} width="28.67px" height="42px" />
                <span id={styles.en_subtitle}>"Reminis Candēre"</span>
                <span id={styles.ch_title}>春日午茶之約</span>
            </div>

            <div className={styles.icon_main}>
                <Image src={ic_point} width="26.5px" height="10px" />
            </div>

            <div className={styles.promote_text_area}>
                <span className={styles.promote_text}>{promote_text}</span>
            </div>


        </div>
    )
}

export default LeftBanner