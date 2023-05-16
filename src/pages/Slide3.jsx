import MainContent from "../components/MainContent"
import SideText from "../components/SideText"
import imageHero_3_desktop from '../../public/assets/images/desktop-image-hero-3.jpg';
import imageHero_3_Mobile from '../../public/assets/images/mobile-image-hero-3.jpg';
import { useSideText } from "../hooks/myhooks";

const Slide3= () => {
  const { slide3 } = useSideText()
  return (
    <MainContent mobileImg={imageHero_3_Mobile} desktopImg={imageHero_3_desktop}>
      <SideText heading={slide3.heading} bodyText={slide3.paragraphText}>
      </SideText>
    </MainContent>
  )
}

export default Slide3