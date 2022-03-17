import styles from '../../../../styles/Body/Waxmelt/WaxmeltContent.module.scss'

import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const CrafterContent = () => {
    const content = "強調個人特色以及喜好的系列，由筧燭設計師精選香氛，調和成為代表筧燭的品牌香氛，隨後再疊加上三種截然不同的香調，並灌入全手工打造之容器，各自成為三方代表。";

    return (
        <div className={styles.content}>
            <div className={styles.title_en}>
                "RC Crafter Candle"
            </div>

            <div className={styles.title_ch}>
                筧燭設計師系列
                <div className={styles.icon_main}>
                    <Image src={ic_point} width="26.5px" height="10px" />
                </div>
            </div>

            <div className={styles.bar}></div>

            <div className={styles.content_details}>
                {content}
            </div>

        </div>
    )
}

export default CrafterContent