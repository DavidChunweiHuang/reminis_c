import CrafterContent from './CrafterContent'

import Image from 'next/image'
import crafter_bg from '../../../../public/img/crafter/crafter@2x.png'
import styles from '../../../../styles/Body/Crafter.module.scss'

const Crafter = ({ en_title, ch_title, content }: any) => {
    return (
        <div className={styles.container} id="crafter">
            <div className={styles.inner_container}>
                <div className={styles.crafter_bg}>
                    <Image src={crafter_bg} width="1140" height="700" alt='' />
                </div>

                <div className={styles.crafter_content}>
                    {/* Crafter Content */}
                    <CrafterContent
                        en_title={en_title}
                        ch_title={ch_title}
                        content={content}
                    />
                </div>
            </div>


        </div>
    )
}

export default Crafter