import HolderContent from './HolderContent'

import Image from 'next/image'
import holder_bg from '../../../../public/img/holder/holder@2x.png'
import styles from '../../../../styles/Body/Holder.module.scss'

const Holder = () => {
    return (
        <div className={styles.container} id="holder">
            <div className={styles.inner_container}>
                <div className={styles.holder_bg}>
                    <Image src={holder_bg} width="1140px" height="700px" />
                </div>

                <div className={styles.holder_content}>
                    <HolderContent />
                </div>
            </div>

        </div>
    )
}

export default Holder