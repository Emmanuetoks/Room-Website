import MainContent from "../components/MainContent"
import SideText from "../components/SideText"
import imageHero_1_desktop from '../../public/assets/images/desktop-image-hero-1.jpg';
import imageHero_1_Mobile from '../../public/assets/images/mobile-image-hero-1.jpg';
import arrowImg from '../../public/assets/images/icon-arrow.svg'
import {useSideText} from "../hooks/myhooks";

const Home = () => {
  const {home} = useSideText()
  return (
    <MainContent mobileImg={imageHero_1_Mobile} desktopImg={imageHero_1_desktop}>
      <SideText heading={home.heading} bodyText={home.paragraphText}>
        <a className="fw-300 clr-black flex shop-now uppercase" style={{'letterSpacing': '10px', 'cursor':'pointer','alignItems':'center', '--gap': '1rem' }}>shop now
        <span>
          <img src={arrowImg}/>
        </span>
        </a>
      </SideText>
    </MainContent>
  )
}

export default Home