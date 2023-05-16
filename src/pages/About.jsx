import MainContent from "../components/MainContent"
import SideText from "../components/SideText"
import imageHero_1_desktop from '../../public/assets/images/desktop-image-hero-1.jpg';
import imageHero_1_Mobile from '../../public/assets/images/mobile-image-hero-1.jpg';
import { useSideText } from "../hooks/myhooks";

const About= () => {
  const { about } = useSideText()
  return (
    <MainContent mobileImg={imageHero_1_Mobile} desktopImg={imageHero_1_desktop}>
      <SideText heading={about.heading} bodyText={about.paragraphText}>
      </SideText>
    </MainContent>
  )
}

export default About