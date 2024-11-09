import styles from '../../../../styles/Body/About/AboutContent.module.scss'
import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const AboutContent = ({ en_subtitle, ch_subtitle, content_title, content }: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.about_title} >
                <span id={styles.en_subtitle}>{en_subtitle}</span>
                <span id={styles.ch_title}>{ch_subtitle}</span>
                <div className={styles.icon_main}>
                    <Image src={ic_point} width="26.5" height="10" alt='' />
                </div>
            </div>

            <div className={styles.bar}></div>

            <div className={styles.about_content}>
                <div className={styles.title}>

                </div>
                <div className={styles.content}>
                    <span id={styles.title}>{content_title}</span>
                    <span id={styles.content}>
                        {content}
                    </span>
                </div>
            </div>
        </div>

    )
}

export default AboutContent