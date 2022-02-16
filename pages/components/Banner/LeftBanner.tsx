import Image from 'next/image'
import logo_pattern from '../../../public/img/logo/logo_pattern.svg'
import ic_point from '../../../public/img/icon/ic_point@2x.png'
import styles from '../../../styles/Banner/LeftBanner.module.scss'

const LeftBanner = () => {
    const promote_text = "靈感來自生活中，嗅覺與視覺融合的剎那以及場景，不同的氣味、不同的畫面、搭配不同的故事，全數融合進天然大豆蠟之中，這就是 Reminis Candēre 筧燭的燭球"
    return (
        <div className={styles.left_container}>
            <div className={styles.main_title}>
                <Image src={logo_pattern} width="28.67px" height="42px" />
                <span id={styles.en_subtitle}>"Reminis Candēre"</span>
                <span id={styles.ch_title}>主打商品資訊</span>
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