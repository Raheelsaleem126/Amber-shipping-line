import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderFour from "@/layouts/headers/HeaderFour"
import TeamDetailsArea from "./TeamDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const TeamDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderFour />
         <main className="fix">
            <Breadcumb title="Team Details" sub_title="Team Details" />
            <TeamDetailsArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default TeamDetails
