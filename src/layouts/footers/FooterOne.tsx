"use client"
// import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image"
import Link from "next/link"
import service_data from "@/data/ServiceData"
// import shape_1 from "@/assets/img/images/cta_shape.png"
// import shape_2 from "@/assets/img/images/footer_shape01.png"
// import shape_3 from "@/assets/img/images/footer_shape02.png"
import logo from "@/assets/img/logo/PNG A.png"

const FooterOne = () => {
    const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };
   return (
      <footer className="footer__area fix">
         <div className="container">
            <div className="footer__top">
               <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="footer__widget">
                        <div className="footer__logo">
                           <Link href="/"><Image src={logo} alt="logo" /></Link>
                        </div>
                        <div className="footer__content">
                           <p>We offer global shipping services to ensure your goods reach their destination safely and on time.</p>
                        </div>
                        <form onSubmit={(e) => (e.preventDefault())} className="footer__newsletter">
                           <div className="form-grp">
                              <input type="email" placeholder="enter your e-mail" />
                              <button type="submit">Subscribe</button>
                           </div>
                           <span>We don’t send you any spam</span>
                        </form>
                     </div>
                  </div>

                  {/* Our Services Section */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Our Services</h4>
                        <div className="footer__link">
                           <ul className="list-wrap">
                              {service_data.filter((items) => items.page === "home_1").map((service) => (
                                 <li key={service.id}>
                                    <Link href={`/services-details/${generateSlug(service.title)}`}>
                                       {service.title}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Quick Links</h4>
                        <div className="footer__link">
                           <ul className="list-wrap">
                              <li><Link href="/how-it-work">How it’s Work</Link></li>
                              <li><Link href="/team">Team</Link></li>
                              {/* <li><Link href="/client">Partners</Link></li> */}
                              {/* <li><Link href="/testimonial">Testimonials</Link></li> */}
                              {/* <li><Link href="/project">Case Studies</Link></li> */}
                              {/* <li><Link href="/pricing">Pricing</Link></li> */}
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Information</h4>
                        <div className="footer__info-wrap">
                           <ul className="list-wrap">
                              <li>
                                 <i className="flaticon-location-1"></i>
                                 <p>Tariq Road Dulara Building<br /> Karachi, Pakistan</p>
                              </li>
                              <li>
                                 <i className="flaticon-telephone"></i>
                                 <Link href="tel:92 343 4613799">+92 343 4613799</Link>
                              </li>
                              <li>
                                 <i className="flaticon-time"></i>
                                 <p>Mon – Sat: 9:30 am – 8 pm, <br /> Sunday: <span>Closed</span></p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="footer__bottom">
               <div className="row align-items-center">
                  <div className="col-md-7">
                     <div className="copyright-text">
                        <p>Copyright <Link href="/">©ASL-Group Of Shipping Line</Link> | All Right Reserved</p>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="footer__social">
                        <ul className="list-wrap">
                           <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                           {/* <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></li> */}
                           <li><Link href="https://wa.me/923434613799?text=Hello%20I%20have%20query!" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Link></li>
                           {/* <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li> */}
                           {/* <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li> */}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer__shape"></div>
      </footer>
   )
}

export default FooterOne
