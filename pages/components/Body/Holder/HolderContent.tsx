import styles from '../../../../styles/Body/Waxmelt/WaxmeltContent.module.scss'

import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const HolderContent = () => {
    const content = "為要將燭球完美融化並體驗其融化過程的美麗，Reminis Candēre 燭台由此而生，將燭球放入碟盤中，細細品味視覺及嗅覺的融合。";

    return (
        <div>
            <div className={styles.title_en}>
                "Wax Melt Holder"
            </div>

            <div className={styles.title_ch}>
                燭台系列
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

export default HolderContent