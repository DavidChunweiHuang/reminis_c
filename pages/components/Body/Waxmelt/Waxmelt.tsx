import Image from 'next/image'
import waxmelt_bg from '../../../../public/img/waxmelt/waxmelt_bg@2x.png'
import WaxmeltContent from './WaxmeltContent'

import styles from '../../../../styles/Body/Waxmelt/Waxmelt.module.scss'

const Waxmelt = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.waxmelt_bg}>
                    <Image src={waxmelt_bg} width="1140px" height="700px" />
                </div>

                <div className={styles.waxmelt_content}>
                    {/* Content Component */}
                    <WaxmeltContent />
                </div>
            </div>

        </div>
    )
}

export default Waxmelt