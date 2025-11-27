import Link from "next/link"
import ContactForm from "../form/ContactForm"

const ContactArea = () => {
   return (
      <section className="contact__area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="contact-map contact-map-two">
                  <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.189455132947!2d55.272826315702166!3d25.18108101928549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e5fdbb22b3f%3A0x72443f7d380b7456!2sEmpire%20Heights%20A!5e0!3m2!1sen!2sin!4v1636721987475!5m2!1sen!2sin" 
                     width="600" 
                     height="450" 
                     loading="lazy">
                  </iframe>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Dubai</h4>
                     <p className="info-one">Empire Heights A - 16F - A - 04 Business <br/>Bay</p>
                     <h4 className="title"><Link href="tel:92 343 4613799">+92 343 4613799</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-8:00 <br/> </p>
                     <Link href="mailto:bdm@as-shippingline.com">bdm@as-shippingline.com</Link>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Karaachi</h4>
                     <p className="info-one">Tariq Road Dulara Building Office No # 101 Karachi, Pakistan</p>
                     <h4 className="title"><Link href="tel:92 343 4613799">+92 343 4613799</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-8:00 <br/> </p>
                     <Link href="mailto:bdm@as-shippingline.com">bdm@as-shippingline.com</Link>
                  </div>
               </div>
             
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="contact__form-wrap">
                     <h2 className="title">Send Us Message</h2>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
