import styles from '../../../styles/Footer/ContactInfo.module.scss'

import Image from 'next/image'
import logo_all from '../../../public/img/logo/logo_all@2x.png'
import qrcode from '../../../public/img/icon/qrcode.png'

const ContactInfo = () => {
    const address = "台北市大安區泰順街38巷28號1樓";
    const email = "service@reminiscandere.com";

    return (
        <div className={styles.container}>
            <div className={styles.info_content}>
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
            </div>
        </div>


    )
}

export default ContactInfo