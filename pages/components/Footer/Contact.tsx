import styles from '../../../styles/Footer/Contact.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import logo_pattern from '../../../public/img/logo/logo_pattern.svg'
import ic_fb from '../../../public/img/icon/ic_fb.svg'
import ic_pinkoi from '../../../public/img/icon/ic_pinkoi.svg'
import ic_ig from '../../../public/img/icon/ic_ig.svg'
import ic_line from '../../../public/img/icon/ic_line.svg'

import { useRef, useState, useEffect } from 'react';

const Contact = ({ en_title, ch_title, content }: any) => {
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
            <Image src={logo_pattern} width="47.78" height="70" alt='' />

            {/* English / Chinese Title */}
            <div className={styles.contact_title}>
                <span id={styles.en_title}>{en_title}</span>
                <span id={styles.ch_title}>{ch_title}</span>
            </div>

            {/* Description */}
            <div className={styles.contact_description}>
                <span>{content}</span>
            </div>

            {/* Icons */}
            <div className={styles.icons}>
                <Link href="https://www.facebook.com/reminiscandere">
                    <Image src={ic_fb} width="41" height="39" alt='' />
                </Link>

                <Link href="https://www.pinkoi.com/store/reminiscandere">
                    <Image src={ic_pinkoi} width="41" height="39" alt='' />
                </Link>

                <Link href="https://www.instagram.com/reminis_candere/">
                    <Image src={ic_ig} width="41" height="39" alt='' />
                </Link>


                <div className={styles.img_line_show}>
                    <Link href="https://lin.ee/3ysrg4U">
                        <Image src={ic_line} width="41" height="39" alt='' />
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Contact