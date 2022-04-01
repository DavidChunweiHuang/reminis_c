import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
import styles from '../../../styles/Banner/Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.container} id="about">
            <LeftBanner />
            <RightBanner />
        </div>
    )
}




export default Banner