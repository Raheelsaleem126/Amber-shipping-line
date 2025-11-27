import FooterOne from "@/layouts/footers/FooterOne"
import Breadcumb from "../common/Breadcumb"
// import Brand from "../homes/home-one/Brand"
// import Testimonial from "../homes/home-one/Testimonial"
// import Team from "../homes/home-three/Team"
// import AboutArea from "./AboutArea"
import AboutOne from "../homes/home-one/About"
// import Counter from "./Counter"
import FeaturesArea from "./FeaturesArea"
// import Pricing from "./Pricing"
// import VideoArea from "./VideoArea"
import ScrollToTop from "../common/ScrollToTop"
import HeaderOne from "@/layouts/headers/HeaderOne"
import MarqueeArea from "../homes/home-one/Marquee"
import LogoCloud from "../logo-cloud/page"
const About = () => {
   return (
      <div className="theme-red">
         <HeaderOne />
         <ScrollToTop />
         <main className="fix">
            <Breadcumb sub_title="About Us" title="About Us" />
            <AboutOne />
            <MarqueeArea/>
            <FeaturesArea />
            {/* <VideoArea /> */}
            {/* <Counter /> */}
            {/* <Pricing /> */}
            {/* <Team style={false} /> */}
            {/* <Testimonial style={true} /> */}
            {/* <Brand /> */}
            <LogoCloud/>
            <FooterOne />
         </main>
      </div>
   )
}

export default About
