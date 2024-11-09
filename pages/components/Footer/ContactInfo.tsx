import styles from '../../../styles/Footer/ContactInfo.module.scss'

import Image from 'next/image'
import logo_all from '../../../public/img/logo/logo_all.svg'
import qrcode from '../../../public/img/icon/qrcode.png'
import { faDivide } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
    const address = "台北市大安區泰順街38巷28號1樓";
    const email = "service@reminiscandere.com";

    return (
        <div className={styles.container}>
            <div className={styles.content_left}>
                <Image src={logo_all} width="216" height="60" alt='' />
                <div className={styles.address_title}>Address</div>
                <div className={styles.address_detail}>{address}</div>
            </div>

            <div className={styles.content_center}>
                <div className={styles.blank_area}></div>
                <div className={styles.email_title}>Email</div>
                <div className={styles.email_detail}>{email}</div>
            </div>
            <div className={styles.area_before_qrcode}></div>
            <div className={styles.content_right}>
                <Image src={qrcode} width="100" height="100" alt='' />
                <div className={styles.qr_text}>透過Line聯絡</div>
            </div>
            {/* <div className={styles.info_content}>
                <div className={styles.info_details}>
                    <Image src={logo_all} width="216px" height="60px" />
                    <table>
                        <tr>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td id={styles.first_col}>{address}</td>
                            <td id={styles.second_col}>{email}</td>
                        </tr>
                    </table>


                </div>

                <div className={styles.qrcode}>
                    <div>
                        <Image src={qrcode} width="100px" height="100px" />
                    </div>
                    <div id={styles.qr_text}>透過Line聯絡</div>
                </div>
            </div> */}
        </div>

    )
}

export default ContactInfo