import MainContent from "../components/MainContent"
import SideText from "../components/SideText"
import imageHero_2_desktop from '../../public/assets/images/desktop-image-hero-2.jpg';
import imageHero_2_Mobile from '../../public/assets/images/mobile-image-hero-2.jpg';
import { useSideText } from "../hooks/myhooks";

const Slide2 = () => {
  const { slide2 } = useSideText()
  return (
    <MainContent mobileImg={imageHero_2_Mobile} desktopImg={imageHero_2_desktop}>
      <SideText heading={slide2.heading} bodyText={slide2.paragraphText} />
    </MainContent>
  )
}

export default Slide2
