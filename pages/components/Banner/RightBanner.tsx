import Image from 'next/image'
import banner_cover from '../../../public/img/banner/img01_1920@2x.png'
import logo_en from '../../../public/img/logo/logo_en.svg'
import styles from '../../../styles/Banner/RightBanner.module.scss'

import Slideshow from '../Slideshow'

const RightBanner = () => {
    return (
        <div className={styles.right_container}>
            <div className={styles.tag}>
                <Image src={logo_en} width="109.2px" height="30.97px" />
            </div>

            <Slideshow />
        </div>
    )
}

export default RightBanner