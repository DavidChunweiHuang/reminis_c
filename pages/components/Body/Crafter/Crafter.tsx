import CrafterContent from './CrafterContent'

import Image from 'next/image'
import crafter_bg from '../../../../public/img/crafter/crafter@2x.png'
import styles from '../../../../styles/Body/Crafter.module.scss'

const Crafter = () => {
    return (
        <div className={styles.container} id="crafter">
            <div className={styles.inner_container}>
                <div className={styles.crafter_bg}>
                    <Image src={crafter_bg} width="1140px" height="700px" />
                </div>

                <div className={styles.crafter_content}>
                    {/* Crafter Content */}
                    <CrafterContent />
                </div>
            </div>


        </div>
    )
}

export default Crafter