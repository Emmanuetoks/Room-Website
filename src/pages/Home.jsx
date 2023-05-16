import MainContent from "../components/MainContent"
import SideText from "../components/SideText"
import imageHero_1_desktop from '../../public/assets/images/desktop-image-hero-1.jpg';

import imageHero_1_Mobile from '../../public/assets/images/mobile-image-hero-1.jpg';

const Home = () => {
  return (
    <MainContent mobileImg={imageHero_1_Mobile} desktopImg={imageHero_1_desktop}>
      <SideText>
        <article>
          <h1>Manufactured with the best materials</h1>
          <p>hello zazu</p>
        </article>
      </SideText>
    </MainContent>
  )
}

export default Home