import AccessoriesContent from './AccessoriesContent'
import styles from '../../../../styles/Body/Accessories.module.scss'

const Accessories = ({ en_title, ch_title, content }: any) => {
    return (
        <div className={styles.container} id="accessories">
            <div className={styles.accessories_bg}>
            </div>

            <div className={styles.below_blank}>
                <div className={styles.accessories_content}>
                    <AccessoriesContent
                        en_title={en_title}
                        ch_title={ch_title}
                        content={content}
                    />
                </div>
            </div>

        </div>
    )
}

export default Accessories