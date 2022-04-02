import Head from 'next/head'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import About from './components/Body/About/About'
import Waxmelt from './components/Body/Waxmelt/Waxmelt'
import Crafter from './components/Body/Crafter/Crafter'
import Holder from './components/Body/Holder/Holder'
import Accessories from './components/Body/Accessories/Accessories'
import Footer from './components/Footer/Footer'

import styles from '/styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reminis Candēre 筧燭</title>
        <meta name="description" content="Reminis Candēre 筧燭 Officail Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/logo/rc_logo_color.png" />
      </Head>

      {/* Body - Header */}
      <Header />

      {/* Body - Banner */}
      <Banner />

      {/* Body - About */}
      <About />

      {/* Body - Wax melt */}
      <Waxmelt />

      {/* Body - Crafter */}
      <Crafter />

      {/* Body - Holder */}
      <Holder />

      {/* Body - Accessories */}
      <Accessories />

      {/* Body - Footer */}
      <Footer />
    </div>
  )
}


export default Home
