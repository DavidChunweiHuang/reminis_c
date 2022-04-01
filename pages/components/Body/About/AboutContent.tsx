import styles from '../../../../styles/Body/About/AboutContent.module.scss'
import Image from 'next/image'
import ic_point from '../../../../public/img/icon/ic_point@2x.png'

const AboutContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about_title} >
                <span id={styles.en_subtitle}>"About us"</span>
                <span id={styles.ch_title}>關於筧燭</span>
                <div className={styles.icon_main}>
                    <Image src={ic_point} width="26.5px" height="10px" />
                </div>
            </div>

            <div className={styles.bar}></div>

            <div className={styles.about_content}>
                <div className={styles.title}>

                </div>
                <div className={styles.content}>
                    <span id={styles.title}>"筧一縷香氣，燭一間憧憬"</span>
                    <span id={styles.content}>筧燭是一種媒介，一種可以讓人們發現生活值得收藏的片段、
                    可以讓人們擁有日常微小卻持續溫暖的媒介；透過靜靜地陪伴，
                讓人們生活裡的每一片光影，每一次相聚，都能成為微笑著回憶的時光。
                </span>
                </div>
            </div>
        </div>

    )
}

export default AboutContent