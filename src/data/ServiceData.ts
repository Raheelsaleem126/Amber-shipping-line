
import { StaticImageData } from "next/image";

import service_1 from "@/assets/img/services/1.png";
import service_2 from "@/assets/img/services/2.png";
import service_3 from "@/assets/img/services/3.png";
import service_4 from "@/assets/img/services/5.png";
import service_5 from "@/assets/img/services/services_img07.jpg";
import service_6 from "@/assets/img/services/4.png";

interface DataType {
  id: number;
  page: string;
  img?: StaticImageData;
  icon: string;
  title: string;
  desc: string;
  list?: string[];
  details?: {
    title: string;
    description: string;
    progress: { title: string; value: number }[];
    inner_title: string;
    inner_description: string;
    benefits: string[];
    faqs: { question: string; answer: string }[];
  };
}

const service_data: DataType[] = [
  // home_1 (main highlights)
  {
    id: 1,
    page: "home_1",
    img: service_1,
    icon: "flaticon-package",
    title: "Dry Container",
    desc: "We provide a large fleet of 20’ and 40’ dry containers to handle general cargo shipments of all kinds.",
  },
  {
    id: 2,
    page: "home_1",
    img: service_2,
    icon: "flaticon-ship",
    title: "Reefer Container",
    desc: "Temperature-controlled reefer containers available for perishable and sensitive cargo.",
  },
  {
    id: 3,
    page: "home_1",
    img: service_3,
    icon: "flaticon-truck",
    title: "Freight Forwarding",
    desc: "Efficient freight forwarding solutions across sea and land with optimized routes and reliable transit.",
  },
  {
    id: 4,
    page: "home_1",
    img: service_4,
    icon: "flaticon-global-distribution",
    title: "NVOCC Services",
    desc: "As an NVOCC, we offer reliable slot booking, space management, and end-to-end documentation for your shipments.",
  },
  {
    id: 5,
    page: "home_1",
    img: service_5,
    icon: "flaticon-delivery-cart",
    title: "Container Trading",
    desc: "Buy, sell, or lease containers through our trusted container trading solutions worldwide.",
  },
  {
    id: 6,
    page: "home_1",
    img: service_6,
    icon: "flaticon-warehouse-1",
    title: "Afghan Transit",
    desc: "Specialized Afghan transit services ensuring smooth cross-border delivery with full compliance.",
  },
 

  // inner_page (detailed service pages)
  {
    id: 1,
    page: "inner_page",
    img: service_1,
    icon: "flaticon-package",
    title: "Dry Container",
    desc: "20’ and 40’ dry containers to transport general cargo safely and efficiently.",
    details: {
      title: "Dry Container Solutions",
      description:
        "Our 20’ and 40’ dry containers ensure safe and efficient transport for all types of general cargo across global routes.",
      progress: [
        { title: "Successful Delivery", value: 85 },
        { title: "Customer Satisfaction", value: 92 },
      ],
      inner_title: "Why Choose Our Dry Container Services",
      inner_description:
        "Our dry containers are designed for durability and versatility, handling a wide range of cargo with ease.",
      benefits: [
        "High-Quality Service Standards",
        "100% Client Satisfaction Focus",
        "Experienced Logistics Professionals",
        "Reliable and Timely Delivery",
      ],
      faqs: [
        {
          question: "What makes your Dry Container service unique?",
          answer: "We provide tailored solutions with a focus on reliability, efficiency, and customer satisfaction.",
        },
        {
          question: "Do you offer customized solutions?",
          answer: "Yes, we tailor our services to meet specific client needs, ensuring flexibility and efficiency.",
        },
        {
          question: "What are your payment terms?",
          answer: "We offer flexible payment options, including bank transfers and credit terms, customized to your agreement.",
        },
      ],
    },
  },
  {
    id: 2,
    page: "inner_page",
    img: service_2,
    icon: "flaticon-ship",
    title: "Reefer Container",
    desc: "Reefer containers designed for temperature-sensitive cargo like food and pharmaceuticals.",
    details: {
      title: "Reefer Container Solutions",
      description:
        "Specialized reefer containers maintain optimal temperatures for perishable goods like food and pharmaceuticals.",
      progress: [
        { title: "Successful Delivery", value: 85 },
        { title: "Customer Satisfaction", value: 92 },
      ],
      inner_title: "Why Choose Our Reefer Container Services",
      inner_description:
        "Advanced temperature control technology ensures your sensitive cargo arrives in perfect condition.",
      benefits: [
        "High-Quality Service Standards",
        "100% Client Satisfaction Focus",
        "Experienced Logistics Professionals",
        "Reliable and Timely Delivery",
      ],
      faqs: [
        {
          question: "What makes your Reefer Container service unique?",
          answer: "We provide tailored solutions with a focus on reliability, efficiency, and customer satisfaction.",
        },
        {
          question: "Do you offer customized solutions?",
          answer: "Yes, we tailor our services to meet specific client needs, ensuring flexibility and efficiency.",
        },
        {
          question: "What are your payment terms?",
          answer: "We offer flexible payment options, including bank transfers and credit terms, customized to your agreement.",
        },
      ],
    },
  },
  {
    id: 3,
    page: "inner_page",
    img: service_3,
    icon: "flaticon-truck",
    title: "Freight Forwarding",
    desc: "Sea and land freight forwarding services ensuring reliable transit and cost-effective logistics.",
    details: {
      title: "Freight Forwarding Solutions",
      description:
        "Comprehensive freight forwarding services via sea and land, tailored for reliable and cost-effective logistics.",
      progress: [
        { title: "Successful Delivery", value: 85 },
        { title: "Customer Satisfaction", value: 92 },
      ],
      inner_title: "Why Choose Our Freight Forwarding Services",
      inner_description:
        "Optimized routes and reliable transit times make our freight forwarding services a top choice.",
      benefits: [
        "High-Quality Service Standards",
        "100% Client Satisfaction Focus",
        "Experienced Logistics Professionals",
        "Reliable and Timely Delivery",
      ],
      faqs: [
        {
          question: "What makes your Freight Forwarding service unique?",
          answer: "We provide tailored solutions with a focus on reliability, efficiency, and customer satisfaction.",
        },
        {
          question: "Do you offer customized solutions?",
          answer: "Yes, we tailor our services to meet specific client needs, ensuring flexibility and efficiency.",
        },
        {
          question: "What are your payment terms?",
          answer: "We offer flexible payment options, including bank transfers and credit terms, customized to your agreement.",
        },
      ],
    },
  },
  {
    id: 4,
    page: "inner_page",
    img: service_4,
    icon: "flaticon-global-distribution",
    title: "NVOCC Services",
    desc: "Professional NVOCC operations including slot booking, bills of lading, and cargo space management.",
    details: {
      title: "NVOCC Services Solutions",
      description:
        "Expert NVOCC operations with slot booking, bills of lading, and end-to-end cargo space management for seamless shipping.",
      progress: [
        { title: "Successful Delivery", value: 85 },
        { title: "Customer Satisfaction", value: 92 },
      ],
      inner_title: "Why Choose Our NVOCC Services",
      inner_description:
        "As an NVOCC, we provide professional slot booking and documentation for hassle-free shipping.",
      benefits: [
        "High-Quality Service Standards",
        "100% Client Satisfaction Focus",
        "Experienced Logistics Professionals",
        "Reliable and Timely Delivery",
      ],
      faqs: [
        {
          question: "What makes your NVOCC Services unique?",
          answer:
            "Our NVOCC services offer comprehensive slot booking, space management, and documentation, ensuring seamless global shipping.",
        },
        {
          question: "Do you offer customized solutions?",
          answer: "Yes, we tailor our services to meet specific client needs, ensuring flexibility and efficiency.",
        },
        {
          question: "What are your payment terms?",
          answer: "We offer flexible payment options, including bank transfers and credit terms, customized to your agreement.",
        },
      ],
    },
  },
  {
    id: 5,
    page: "inner_page",
    img: service_5,
    icon: "flaticon-delivery-cart",
    title: "Container Trading",
    desc: "Global container trading solutions with flexible buy, sell, and lease options.",
    details: {
      title: "Container Trading Solutions",
      description:
        "Global trading solutions for buying, selling, or leasing containers with flexible and reliable options.",
      progress: [
        { title: "Successful Delivery", value: 85 },
        { title: "Customer Satisfaction", value: 92 },
      ],
      inner_title: "Why Choose Our Container Trading Services",
      inner_description:
        "Flexible options for container trading, tailored to meet your specific needs worldwide.",
      benefits: [
        "High-Quality Service Standards",
        "100% Client Satisfaction Focus",
        "Experienced Logistics Professionals",
        "Reliable and Timely Delivery",
      ],
      faqs: [
        {
          question: "What makes your Container Trading service unique?",
          answer: "We provide tailored solutions with a focus on reliability, efficiency, and customer satisfaction.",
        },
        {
          question: "Do you offer customized solutions?",
          answer: "Yes, we tailor our services to meet specific client needs, ensuring flexibility and efficiency.",
        },
        {
          question: "What are your payment terms?",
          answer: "We offer flexible payment options, including bank transfers and credit terms, customized to your agreement.",
        },
      ],
    },
  },
  {
    id: 6,
    page: "inner_page",
    img: service_6,
    icon: "flaticon-warehouse-1",
    title: "Afghan Transit",
    desc: "Secure and efficient Afghan transit cargo handling with customs and documentation support.",
    details: {
      title: "Afghan Transit Solutions",
      description:
        "Specialized transit services for Afghan cargo, ensuring secure delivery with full customs and documentation support.",
      progress: [
        { title: "Successful Delivery", value: 85 },
        { title: "Customer Satisfaction", value: 92 },
      ],
      inner_title: "Why Choose Our Afghan Transit Services",
      inner_description:
        "Seamless Afghan transit with expert handling and compliance for cross-border shipments.",
      benefits: [
        "High-Quality Service Standards",
        "100% Client Satisfaction Focus",
        "Experienced Logistics Professionals",
        "Reliable and Timely Delivery",
      ],
      faqs: [
        {
          question: "What makes your Afghan Transit service unique?",
          answer: "We provide tailored solutions with a focus on reliability, efficiency, and customer satisfaction.",
        },
        {
          question: "Do you offer customized solutions?",
          answer: "Yes, we tailor our services to meet specific client needs, ensuring flexibility and efficiency.",
        },
        {
          question: "What are your payment terms?",
          answer: "We offer flexible payment options, including bank transfers and credit terms, customized to your agreement.",
        },
      ],
    },
  },

];

export default service_data;
