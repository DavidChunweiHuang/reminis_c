import Image from 'next/image'
import about_image from '../../../../public/img/about/about.png'
import styles from '../../../../styles/Body/About/About.module.scss'

import AboutContent from './AboutContent'

const About = () => {
    return (
        <div className={styles.container}>

            {/* About Content */}
            <AboutContent />

            {/* Image & Background */}
            <div className={styles.below_area}>
                <div className={styles.below_blank}>
                    <div className={styles.about_image}>
                        <Image src={about_image} width="800px" height="400px" />
                    </div>
                </div>
                <div className={styles.content_background}></div>
            </div>


        </div>
    )
}

export default About