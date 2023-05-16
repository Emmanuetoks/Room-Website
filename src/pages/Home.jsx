import MainContent from "../components/MainContent"
import SideText from "../components/SideText"
import imageHero_1_desktop from '../../public/assets/images/desktop-image-hero-1.jpg';
import imageHero_1_Mobile from '../../public/assets/images/mobile-image-hero-1.jpg';
import { useSideText } from "../hooks/myhooks";

const Home = () => {
  const { home } = useSideText()
  return (
    <MainContent mobileImg={imageHero_1_Mobile} desktopImg={imageHero_1_desktop}>
      <SideText heading={home.heading} bodyText={home.paragraphText}>
      </SideText>
    </MainContent>
  )
}

export default Home