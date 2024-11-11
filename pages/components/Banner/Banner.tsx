import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
import styles from '../../../styles/Banner/Banner.module.scss'
import React from 'react'

const Banner = ({ promote_text, banner_title }: any) => {
    return (
        <div className={styles.container} id="about">
            <LeftBanner
                promote_text={promote_text}
                banner_title={banner_title} />
            <RightBanner />
        </div>
    )
}




export default Banner