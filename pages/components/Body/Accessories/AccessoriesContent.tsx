import styles from '../../../../styles/Body/Waxmelt/WaxmeltContent.module.scss'

import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const AccessoriesContent = () => {
    const content = "筧燭茶蠟為純天然大豆蠟製成，搭配手工燭台及碟盤，將空間注入靈魂。";

    return (
        <div>
            <div className={styles.title_en}>
                "Accessories"
            </div>

            <div className={styles.title_ch}>
                配件系列
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

export default AccessoriesContent