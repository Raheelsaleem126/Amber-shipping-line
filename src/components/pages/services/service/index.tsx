import Breadcumb from "@/components/common/Breadcumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceArea from "./ServiceArea"
import FooterOne from "@/layouts/footers/FooterOne"
import ScrollToTop from "@/components/common/ScrollToTop"

const Service = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Services" sub_title="Services" />
            <ServiceArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default Service
