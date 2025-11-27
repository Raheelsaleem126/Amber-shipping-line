import Image from "next/image"

import choose_thumb1 from "@/assets/img/images/choose_img01.jpg"
import InjectableSvg from "@/components/common/InjectableSvg"
import Link from "next/link"
import Count from "@/components/common/Count"

const Choose = () => {
   return (
      <section className="choose__area section-pt-120 section-pb-90">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-5 col-md-10">
                  <div className="choose__img wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                     <Image src={choose_thumb1} alt="img" />
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="choose__content">
                     <div className="section__title mb-25">
                        <span className="sub-title">Why Choose Us</span>
                        <h2 className="title">We are logistics improving <br /> our skills to fulfill delivery <br /> of any level!</h2>
                     </div>
                     <div className="choose__content-bottom">
                        <div className="left-side">
                           <p style={{ color: '#333' }}>Adipiscing eliAl iquam vulputate tortor area neclue com university viverra Suspen disse arfauci bussed dolor eget Sed drar urna hiftler Group irepres entatilve loisticsti for operato vulputate tortor area neclue instagram area.</p>
                           <Link href="/services" className="btn">To know more About Us <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
                        </div>
                        <div className="counter__wrap">
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-package"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count" style={{ color: '#333' }}><span className="counter-number"><Count number={9.5} /></span>M</h2>
                                 <p style={{ color: '#666' }}>Delivered Goods</p>
                              </div>
                           </div>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count" style={{ color: '#333' }}><span className="counter-number"><Count number={15.9} /></span>M</h2>
                                 <p style={{ color: '#666' }}>Clients Worldwide</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Choose
