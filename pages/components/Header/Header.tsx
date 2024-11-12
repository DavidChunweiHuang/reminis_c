import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import logo_all from '../../../public/img/logo/RC_logo_new-02.png'
import styles from '../../../styles/Header/Header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_image}>
                <Link href="/">
                    <Image src={logo_all} fill alt={''} objectFit='contain' />
                </Link>

            </div>

            <Navigation />
        </div>
    )
}

export default Header

