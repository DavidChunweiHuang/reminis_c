import styles from '../../../../styles/Body/Waxmelt/WaxmeltContent.module.scss'

import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const AccessoriesContent = () => {
    const content = "忙碌的生活，是否已忘記怎麼慢下來？步調越快，心態更需要放慢。筧燭提供您喘息的空間和體驗，藉由手作來體驗慢節奏，藉由體驗來重新感受生活。";
    const content_sec = "筧燭提供多樣化體驗項目，讓您在繁忙的節奏中，輕鬆且愜意的體驗手作。將手作的美好融入您生活中，享受當下手作帶給您的療癒與滿足。"

    return (
        <div className={styles.content}>
            <div className={styles.title_en}>
                "Experience""
            </div>

            <div className={styles.title_ch}>
                輕體驗
                <div className={styles.icon_main}>
                    <Image src={ic_point} width="26.5px" height="10px" />
                </div>
            </div>

            <div className={styles.bar}></div>

            <div className={styles.content_details}>
                {content_sec}
            </div>

        </div >
    )
}

export default AccessoriesContent