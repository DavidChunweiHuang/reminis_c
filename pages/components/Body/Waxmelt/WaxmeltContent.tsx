import styles from '../../../../styles/Body/Waxmelt/WaxmeltContent.module.scss'

import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const WaxmeltContent = () => {
    const content = "靈感來自於生活中嗅覺與視覺融合的剎那及場景，不同的味道，不同的畫面，搭配不同的故事，全數融合進天然大豆蠟中，這就是筧燭 Reminis Candēre 燭球。";

    return (
        <div>
            <div className={styles.title_en}>
                "Wax Melt"
            </div>

            <div className={styles.title_ch}>
                燭球系列
                <div className={styles.icon_main}>
                    <Image src={ic_point} width="26.5px" height="10px" />
                </div>
            </div>

            <div className={styles.bar}></div>

            <div className={styles.content}>
                {content}
            </div>

        </div>
    )
}

export default WaxmeltContent