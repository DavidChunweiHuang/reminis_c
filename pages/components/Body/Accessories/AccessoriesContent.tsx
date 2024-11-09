import styles from '../../../../styles/Body/Waxmelt/WaxmeltContent.module.scss'

import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const AccessoriesContent = ({ en_title, ch_title, content }: any) => {
    return (
        <div className={styles.content}>
            <div className={styles.title_en}>
                {en_title}
            </div>

            <div className={styles.title_ch}>
                {ch_title}
                <div className={styles.icon_main}>
                    <Image src={ic_point} width="26.5" height="10" alt='' />
                </div>
            </div>

            <div className={styles.bar}></div>

            <div className={styles.content_details}>
                {content}
            </div>

        </div >
    )
}

export default AccessoriesContent