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
    <div>
      <div className={styles.container}>
        <Head>
          <title>Reminis Candēre</title>
          <meta name="description" content="Reminis Candēre 筧燭 Officail Site" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/img/logo/rc_logo_color.png" />
        </Head>

        {/* Body - Header */}
        <Header />

        {/* Body - Banner */}
        <Banner
          promote_text={'使用台灣水庫淤泥環保材質，由筧燭水泥設計師親手製作，韓系的配色搭配日式風格元素，不管是放在家中的風水福位、財運祈福、祈願祝福，福兔達摩絕對是祈福送禮首選'}
          banner_title={'福兔達摩'} />

        {/* Body - About */}
        <About
          en_subtitle={'"About us"'}
          ch_subtitle={'關於筧燭'}
          content_title={'"筧一縷香氣，燭一間憧憬"'}
          content={'筧燭是一種媒介，一種可以讓人們發現生活值得收藏的片段、可以讓人們擁有日常微小卻持續溫暖的媒介；透過靜靜地陪伴，讓人們生活裡的每一片光影，每一次相聚，都能成為微笑著回憶的時光。'}
        />

        {/* Body - Wax melt */}
        <Waxmelt
          en_title={'"Wax Melt"'}
          ch_title={"燭球系列"}
          content={'靈感來自於生活中嗅覺與視覺融合的剎那及場景，不同的味道，不同的畫面，搭配不同的故事，全數融合進天然大豆蠟中，這就是筧燭 Reminis Candēre 燭球。'}
        />

        {/* Body - Crafter */}
        <Crafter
          en_title={'"RC Crafter Candle"'}
          ch_title={"筧燭設計師系列"}
          content={'強調個人特色以及喜好的系列，由筧燭設計師精選香氛，調和成為代表筧燭的品牌香氛，隨後再疊加上三種截然不同的香調，並灌入全手工打造之容器，各自成為三方代表。'}
        />

        {/* Body - Holder */}
        <Holder
          en_title={'"Wax Melt Holder"'}
          ch_title={"燭台系列"}
          content={'為要將燭球完美融化並體驗其融化過程的美麗，Reminis Candēre 燭台由此而生，將燭球放入碟盤中，細細品味視覺及嗅覺的融合。'}
        />

        {/* Body - Accessories */}
        <Accessories
          en_title={'"Experience"'}
          ch_title={"輕體驗"}
          content={'筧燭提供多樣化體驗項目，讓您在繁忙的節奏中，輕鬆且愜意的體驗手作。將手作的美好融入您生活中，享受當下手作帶給您的療癒與滿足。'}
        // content = "忙碌的生活，是否已忘記怎麼慢下來？步調越快，心態更需要放慢。筧燭提供您喘息的空間和體驗，藉由手作來體驗慢節奏，藉由體驗來重新感受生活。";
        />

        {/* Body - Footer */}
        <Footer
          en_title={'"Contact us"'}
          ch_title={'聯絡我們'}
          content={'若喜歡我們的作品理念，歡迎來工作室走走，或是透過以下管道與我們聯繫。期許您在筧燭可以找到心目中的理想質感生活。'}
        />
      </div>
    </div>
  )
}


export default Home
