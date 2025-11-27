import Image from "next/image"
import Link from "next/link"

import logo1 from "@/assets/img/logo/PNG A b.png"
import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"

// Helper function to generate slug from title
const generateSlug = (title: string) => {
   return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
};

const ServiceSidebar = () => {
   // Get all services with inner_page data
   const services = service_data.filter((item) => item.page === "inner_page" && item.details);

   return (
      <div className="col-30">
         <aside className="services__sidebar">
            <div className="services__widget">
               <div className="services__cat-list">
                  <ul className="list-wrap">
                     {services.map((service) => (
                        <li key={service.id}>
                           <Link href={`/services-details/${generateSlug(service.title)}`}>
                              <span><i className={service.icon}></i>{service.title}</span> <i className="flaticon-right-arrow"></i>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="services__widget services__widget-two">
               <div className="sidebar__logo">
                  <Link href="/"><Image src={logo1} alt="logo" /></Link>
               </div>
               <div className="sidebar__contact">
                  <h2 className="title">Logistics & Cargo <br /> for Business</h2>
                  <Link href="tel:92 343 4613799" className="sidebar__phone"><i className="flaticon-telephone"></i>+92 343 4613799</Link>
                  <Link href="/contact" className="btn">Contact With us <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
               </div>
               <div className="sidebar__shape" style={{ backgroundImage: `url(/assets/img/services/services_sidebar_shape.png)` }}></div>
            </div>
            <div className="services__widget services__widget-three">
               <h4 className="sidebar__widget-title">Brochure</h4>
               <div className="sidebar__brochure">
                  <p>when an unknown printer took ga lley offer typey anddey.</p>
                  <Link href="/assets/img/services/services_img01.jpg" target="_blank" download="">
                     <InjectableSvg src="/assets/img/icon/pdf.svg" alt="" className="injectable" />
                     PDF. Download
                  </Link>
                  <Link href="/assets/img/services/services_img01.jpg" target="_blank" download="">
                     <InjectableSvg src="/assets/img/icon/doc.svg" alt="" className="injectable" />
                     DOC. Download
                  </Link>
               </div>
            </div>
         </aside>
      </div>
   )
}

export default ServiceSidebar
