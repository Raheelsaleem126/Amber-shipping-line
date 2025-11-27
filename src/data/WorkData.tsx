interface DataType {
   id: number;
   icon: string;
   number: string;
   title: string;
   desc: JSX.Element;
   shape: string;
}

const work_data: DataType[] = [
   {
      id: 1,
      number: "01",
      icon: "flaticon-package",
      title: "Request Quote & Booking",
      desc: (<>Submit your cargo details and shipping requirements. We&apos;ll provide competitive rates and available space options tailored to your needs.</>),
      shape: "/assets/img/images/work_shape01.svg",
   },
   {
      id: 2,
      number: "02",
      icon: "flaticon-support",
      title: "Space Allocation & Documentation",
      desc: (<>We secure container space with ocean carriers and prepare all necessary documentation including Bills of Lading, shipping instructions, and customs paperwork.</>),
      shape: "/assets/img/images/work_shape02.svg",
   },
   {
      id: 3,
      number: "03",
      icon: "flaticon-global-distribution",
      title: "Cargo Consolidation & Loading",
      desc: (<>Your cargo is consolidated at our facility, properly packed and secured in containers, then loaded onto vessels at the port of origin.</>),
      shape: "/assets/img/images/work_shape01.svg",
   },
   {
      id: 4,
      number: "04",
      icon: "flaticon-parcel",
      title: "Shipping & Delivery",
      desc: (<>We track your shipment throughout transit and coordinate final delivery, customs clearance, and documentation handover at the destination port.</>),
      shape: "/assets/img/images/work_shape01.svg",
   },
];

export default work_data;