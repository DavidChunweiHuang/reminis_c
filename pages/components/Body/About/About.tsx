import Image from 'next/image'
import about_image from '../../../../public/img/about/about.png'
import styles from '../../../../styles/Body/About/About.module.scss'
import Link from 'next/link'

import AboutContent from './AboutContent'

const About = ({ en_subtitle, ch_subtitle, content_title, content }: any) => {
    return (
        <div className={styles.container}>

            {/* About Content */}
            <AboutContent
                en_subtitle={en_subtitle}
                ch_subtitle={ch_subtitle}
                content_title={content_title}
                content={content}
            />


            {/* Image & Background */}
            {/* <div className={styles.below_area}>
                <div className={styles.below_blank}>
                    <div className={styles.about_image}>
                        <Image src={about_image} layout="responsive" objectFit="cover" />
                    </div>
                </div>
                <div className={styles.content_background}></div>
            </div> */}

            <div className={styles.below_area}>
                <div className={styles.below_blank}>
                    <div className={styles.about_image}>
                        <Image src={about_image} layout="fill" objectFit="cover" alt={''} />
                    </div>
                </div>
                <div className={styles.content_background} ></div>

            </div>

        </div>
    )
}

export default About