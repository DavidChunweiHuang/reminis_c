import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
import styles from '../../../styles/Banner/Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.container}>
            <LeftBanner />
            <RightBanner />
        </div>
    )
}




export default Banner