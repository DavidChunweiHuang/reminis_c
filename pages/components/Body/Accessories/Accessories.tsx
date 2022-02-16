import AccessoriesContent from './AccessoriesContent'
import styles from '../../../../styles/Body/Accessories.module.scss'

const Accessories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.accessories_bg}>
            </div>

            <div className={styles.below_blank}>
                <div className={styles.accessories_content}>
                    <AccessoriesContent />
                </div>
            </div>

        </div>
    )
}

export default Accessories