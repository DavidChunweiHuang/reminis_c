import styles from '../../../styles/Footer/Contact.module.scss'

import Image from 'next/image'
import logo_pattern from '../../../public/img/logo/logo_pattern.svg'
import ic_fb from '../../../public/img/icon/ic_fb@2x.png'
import ic_pinkoi from '../../../public/img/icon/ic_pinkoi@2x.png'
import ic_ig from '../../../public/img/icon/ic_ig@2x.png'


const Contact = () => {
    return (
        <div className={styles.contact_content}>
            {/* Logo */}
            <Image src={logo_pattern} width="47.78" height="70px" />

            {/* English / Chinese Title */}
            <div className={styles.contact_title}>
                <span id={styles.en_title}>"Contact us"</span>
                <span id={styles.ch_title}>聯絡我們</span>
            </div>

            {/* Description */}
            <div className={styles.contact_description}>
                <span>若喜歡我們的作品理念，歡迎來工作室走走，或是透過以下管道與我們聯繫。期許您在筧燭可以找到心目中的理想質感生活。</span>
            </div>

            {/* Icons */}
            <div className={styles.icons}>
                <Image src={ic_fb} width="41px" height="39px" />
                <Image src={ic_pinkoi} width="41px" height="39px" />
                <Image src={ic_ig} width="41px" height="39px" />
            </div>
        </div>

    )
}

export default Contact