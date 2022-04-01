import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import logo_all from '../../../public/img/logo/logo_all.svg'
import styles from '../../../styles/Header/Header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_image}>
                <Link href="/">
                    <a><Image src={logo_all} width='218px' height='61px' /></a>
                </Link>

            </div>

            <Navigation />
        </div>
    )
}

export default Header

