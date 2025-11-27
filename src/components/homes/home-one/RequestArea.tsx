"use client"
import Image from "next/image";
import { useState } from "react";

import request_shape from "@/assets/img/images/request_shape.svg"

const tab_title: string[] = ["Request a Quote", "Track & Trace"];

interface PropsType {
   style?: boolean;
}

const RequestArea = ({ style }: PropsType) => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className={style ? "request__area-two" : "request__area"}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="request__wrap">
                     <div className="request__nav">
                        <ul className={`nav nav-tabs ${style ? "request__nav-two" : ""}`} id="myTab">
                           {tab_title.map((tab, index) => (
                              <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="request__tab-wrap">
                        <div className="tab-content" id="myTabContent">
                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="request-tab-pane">
                              <form onSubmit={(e) => e.preventDefault()} className="request__form">
                                 <span className="title">Personal Data</span>
                                 <div className="row gutter-20">
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder="Name*" />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="email" placeholder="Mail*" />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder="Phone*" />
                                       </div>
                                    </div>
                                 </div>
                                 <span className="title">Shipment Data</span>
                                 <div className="row gutter-20">
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <div className="form-grp select-grp">
                                             <select name="service" className="orderby">
                                                <option value="">Select Service Type</option>
                                                <option value="Dry Container">Dry Container</option>
                                                <option value="OT Container">OT Container</option>
                                                <option value="Freight Forwarding">Freight Forwarding</option>
                                                <option value="NVOCC Services">NVOCC Services</option>
                                                <option value="Container Trading">Container Trading</option>
                                                <option value="Afghan Transit">Afghan Transit</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder="Port of Origin" />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder="Port of Destination" />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp select-grp">
                                          <select name="incoterms" className="orderby">
                                             <option value="">Select Incoterms</option>
                                             <option value="FOB">FOB (Free On Board)</option>
                                             <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                                             <option value="CFR">CFR (Cost & Freight)</option>
                                             <option value="EXW">EXW (Ex Works)</option>
                                             <option value="FCA">FCA (Free Carrier)</option>
                                             <option value="DDP">DDP (Delivered Duty Paid)</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder="Cargo Weight (kg)" />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp select-grp">
                                          <select name="container" className="orderby">
                                             <option value="">Container Size</option>
                                             <option value="20ft">20ft Container</option>
                                             <option value="40ft">40ft Container</option>
                                             <option value="40ft HC">40ft High Cube</option>
                                             <option value="Other">Other</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-lg-12">
                                       <div className="form-grp">
                                          <textarea name="cargo_description" placeholder="Cargo Description (e.g., type of goods, special requirements)" rows={3}></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 <div className={`request__radio-wrap ${style ? "request__radio-wrap-two" : ""}`}>
                                    <div className="form-check">
                                       <input className="form-check-input" type="checkbox" name="services" id="flexCheckDefault1" />
                                       <label className="form-check-label" htmlFor="flexCheckDefault1">
                                          Customs Clearance
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="checkbox" name="services" id="flexCheckDefault2" />
                                       <label className="form-check-label" htmlFor="flexCheckDefault2">
                                          Cargo Insurance
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="checkbox" name="services" id="flexCheckDefault3" />
                                       <label className="form-check-label" htmlFor="flexCheckDefault3">
                                          Documentation Services
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="checkbox" name="services" id="flexCheckDefault4" />
                                       <label className="form-check-label" htmlFor="flexCheckDefault4">
                                          Express Delivery
                                       </label>
                                    </div>
                                 </div>
                                 <button type="submit" className="btn">Request a Quote</button>
                              </form>
                           </div>
                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="track-tab-pane">
                              <form onSubmit={(e) => e.preventDefault()} className="request__form">
                                 <span className="title">Tracking Information</span>
                                 <div className="form-grp select-grp">
                                    <select name="tracking_type" className="orderby">
                                       <option value="">Select Document Type</option>
                                       <option value="Bill of Lading">Bill of Lading (B/L)</option>
                                       <option value="Container Number">Container Number</option>
                                       <option value="Booking Reference">Booking Reference</option>
                                       <option value="House Bill of Lading">House Bill of Lading (HBL)</option>
                                    </select>
                                 </div>
                                 <span className="title">Tracking Number</span>
                                 <div className="form-grp">
                                    <textarea name="tracking_numbers" placeholder="Enter your tracking number(s). You can enter up to 10 tracking numbers separated by commas." rows={4}></textarea>
                                 </div>
                                 <div className={`request__radio-wrap ${style ? "request__radio-wrap-two" : ""}`}>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="trackingService" id="flexRadioDefault5" value="Dry Container" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault5">
                                          Dry Container
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="trackingService" id="flexRadioDefault6" value="OT Container" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault6">
                                          OT Container
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="trackingService" id="flexRadioDefault7" value="Freight Forwarding" defaultChecked />
                                       <label className="form-check-label" htmlFor="flexRadioDefault7">
                                          Freight Forwarding
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="trackingService" id="flexRadioDefault8" value="NVOCC Services" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault8">
                                          NVOCC Services
                                       </label>
                                    </div>
                                 </div>
                                 <button type="submit" className="btn">Track & Trace</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {style && <div className="request__shape">
            <Image src={request_shape} alt="shape" data-aos="fade-down" data-aos-delay="400" />
         </div>}
      </div>
   )
}

export default RequestArea
