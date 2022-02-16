import Image from 'next/image'
import Navigation from './Navigation'
import logo_all from '../../../public/img/logo/logo_all.svg'
import styles from '../../../styles/Header/Header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_image}>
                <Image src={logo_all} width='218px' height='61px' />
            </div>

            <Navigation />
        </div>
    )
}

export default Header

