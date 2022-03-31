import styles from '../../styles/Slideshow.module.scss'

import { useRef, useState, useEffect } from 'react';
// 
const banner_1920 = [
    // "url(/img/banner/img01_1920.png)",
    // "url(/img/banner/img01_1920@2x-2.png)",
    // "url(/img/banner/img01_1920@2x-3.png)"

    "url(/img/banner/spring/spring_banner1_1920.png)",
    "url(/img/banner/spring/spring_banner2_1920.png)",
    "url(/img/banner/spring/spring_banner3_1920.png)",
]

const banner_1440 = [
    // "url(/img/banner/banner_1440@2x.png)",
    // "url(/img/banner/banner_1440@2x.png)",
    // "url(/img/banner/banner_1440@2x.png)"

    "url(/img/banner/spring/spring_banner1_1440.png)",
    "url(/img/banner/spring/spring_banner2_1440.png)",
    "url(/img/banner/spring/spring_banner3_1440.png)",
]

const banner_1280 = [
    // "url(/img/banner/banner_1280@2x.png)",
    // "url(/img/banner/banner_1280@2x.png)",
    // "url(/img/banner/banner_1280@2x.png)"

    "url(/img/banner/spring/spring_banner1_1280.png)",
    "url(/img/banner/spring/spring_banner2_1280.png)",
    "url(/img/banner/spring/spring_banner3_1280.png)",
]

const banner_800 = [
    // "url(/img/banner/banner_800@2x.png)",
    // "url(/img/banner/banner_800@2x.png)",
    // "url(/img/banner/banner_800@2x.png)"

    "url(/img/banner/spring/spring_banner1_800.png)",
    "url(/img/banner/spring/spring_banner2_800.png)",
    "url(/img/banner/spring/spring_banner3_800.png)",
]

const banner_m = [
    // "url(/img/banner/banner_m@2x.png)",
    // "url(/img/banner/banner_m@2x.png)",
    // "url(/img/banner/banner_m@2x.png)"

    "url(/img/banner/spring/spring_banner1_m.png)",
    "url(/img/banner/spring/spring_banner2_m.png)",
    "url(/img/banner/spring/spring_banner3_m.png)",
]

// var => let
var banner = [""]

const Slideshow = () => {
    // Get window dimention after redering (since react is pre-redering)
    const [width, setWidth] = useState(2500);

    useEffect(() => {
        const updateWindowDimentions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);

        };

        window.addEventListener("resize", updateWindowDimentions);
        return () => window.removeEventListener("resize", updateWindowDimentions)
    }, []);

    if (width >= 1920) {
        banner = banner_1920;
    }

    else if (width >= 1440 && width < 1920) {
        banner = banner_1440;
    }

    else if (width >= 1280 && width < 1440) {
        banner = banner_1280;
    }

    else if (width >= 800 && width < 1280) {
        banner = banner_800;
    }

    else if (width > 0 && width < 800) {
        banner = banner_m;
    }
    // Test end

    // Slideshow Configuration
    const [index, setIndex] = useState(0);
    const delay = 2500;

    useEffect(() => {
        setTimeout(() =>
            setIndex((prevIndex) =>
                prevIndex === banner.length - 1 ? 0 : prevIndex + 1
            ), delay
        );
        return () => { };
    }, [index]);


    // Rendering
    return (
        <div className={styles.slideshow}>
            {/* 多少尺寸，就設定多少div, div 裡面再分別map對應的banner尺寸 */}
            <div
                className={styles.slideshow_slider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                {/* Maybe set a viewport of device and useState to state the width/height of device */}
                {banner.map((backgroundImage, index) => (
                    <div
                        className={styles.slide}
                        key={index}
                        style={{ backgroundImage }} ></div>
                ))}
            </div>

            {/* <div className={styles.slideshow_dots}>
                {colors.map((_, idx) => (
                    <div key={idx} className={styles.slideshow_dot}></div>
                ))}
            </div> */}


        </div>
    )
}




export default Slideshow