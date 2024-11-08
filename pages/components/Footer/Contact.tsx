import styles from '../../../styles/Footer/Contact.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import logo_pattern from '../../../public/img/logo/logo_pattern.svg'
import ic_fb from '../../../public/img/icon/ic_fb.svg'
import ic_pinkoi from '../../../public/img/icon/ic_pinkoi.svg'
import ic_ig from '../../../public/img/icon/ic_ig.svg'
import ic_line from '../../../public/img/icon/ic_line.svg'

import { useRef, useState, useEffect } from 'react';

const Contact = () => {
    // Get window width
    const [width, setWidth] = useState(2500);

    useEffect(() => {
        const updateWindowDimentions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);

        };

        window.addEventListener("resize", updateWindowDimentions);
        return () => window.removeEventListener("resize", updateWindowDimentions)
    }, []);

    // Rendering
    return (
        <div className={styles.contact_content} id="contactus">
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
                <Link href="https://www.facebook.com/reminiscandere">
                    <a target="_blank"><Image src={ic_fb} width="41px" height="39px" /></a>
                </Link>

                <Link href="https://www.pinkoi.com/store/reminiscandere">
                    <a target="_blank"><Image src={ic_pinkoi} width="41px" height="39px" /></a>
                </Link>

                <Link href="https://www.instagram.com/reminis_candere/">
                    <a target="_blank"><Image src={ic_ig} width="41px" height="39px" /></a>
                </Link>


                <div className={styles.img_line_show}>
                    <Link href="https://lin.ee/3ysrg4U">
                        <a target="_blank"><Image src={ic_line} width="41px" height="39px" /></a>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Contact