import HolderContent from './HolderContent'

import Image from 'next/image'
import holder_bg from '../../../../public/img/holder/holder@2x.png'
import styles from '../../../../styles/Body/Holder.module.scss'

const Holder = ({ en_title, ch_title, content }: any) => {
    return (
        <div className={styles.container} id="holder">
            <div className={styles.inner_container}>
                <div className={styles.holder_bg}>
                    <Image src={holder_bg} width="1140" height="700" alt='' />
                </div>

                <div className={styles.holder_content}>
                    <HolderContent
                        en_title={en_title}
                        ch_title={ch_title}
                        content={content}
                    />
                </div>
            </div>

        </div>
    )
}

export default Holder