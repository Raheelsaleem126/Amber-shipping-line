import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderFour from "@/layouts/headers/HeaderFour"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HowItWorkArea from "./HowItWorkArea"
import FooterOne from "@/layouts/footers/FooterOne"

const HowItWork = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="How it’s Work" sub_title="How it’s Work" />
            <HowItWorkArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default HowItWork
