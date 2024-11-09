import Image from 'next/image'
import waxmelt_bg from '../../../../public/img/waxmelt/waxmelt_bg@2x.png'
import WaxmeltContent from './WaxmeltContent'

import styles from '../../../../styles/Body/Waxmelt/Waxmelt.module.scss'

const Waxmelt = ({ en_title, ch_title, content }: any) => {
    return (
        <div className={styles.container} id="waxmelt">
            <div className={styles.inner_container}>
                <div className={styles.waxmelt_bg}>
                    <Image src={waxmelt_bg} layout="responsive" objectFit="cover" alt={''} />
                </div>

                <div className={styles.blank_area}></div>

                <div className={styles.waxmelt_content}>
                    {/* Content Component */}
                    <WaxmeltContent
                        en_title={en_title}
                        ch_title={ch_title}
                        content={content}
                    />
                </div>
            </div>

        </div>
    )
}

export default Waxmelt