import { StaticImageData } from "next/image";

import team_img1 from "@/assets/img/team/h2_team_img01.png"
import team_img2 from "@/assets/img/team/h2_team_img02.png"
import team_img3 from "@/assets/img/team/h2_team_img03.png"
import team_img4 from "@/assets/img/team/h2_team_img04.png"
import team_img5 from "@/assets/img/team/team_img01.png"
import team_img6 from "@/assets/img/team/team_img02.png"
import team_img7 from "@/assets/img/team/team_img03.png"
import team_img8 from "@/assets/img/team/team_img04.png"

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   title: string;
   designation: string;
   data_aos_delay?: string;
}

const team_data: DataType[] = [
   // home_2
   {
      id: 1,
      page: "home_2",
      img: team_img1,
      title: "Ammar Imtiaz",
      designation: "Trading Executive"
   },
   {
      id: 2,
      page: "home_2",
      img: team_img2,
      title: "Ahmed",
      designation: "Inventory Manager"
   },
   {
      id: 3,
      page: "home_2",
      img: team_img3,
      title: "Saif",
      designation: "Pricing Head"
   },
   {
      id: 4,
      page: "home_2",
      img: team_img4,
      title: "Sharukh",
      designation: "Booking and Docs Head"
   },

   // home_3
   {
      id: 1,
      page: "home_3",
      img: team_img5,
      title: "Ammar Imtiaz",
      designation: "Trading Executive",
      data_aos_delay: "200",
   },
   {
      id: 2,
      page: "home_3",
      img: team_img6,
      title: "Ahmed",
      designation: "Inventory Manager",
      data_aos_delay: "400",
   },
   {
      id: 3,
      page: "home_3",
      img: team_img7,
      title: "Saif",
      designation: "Pricing Head",
      data_aos_delay: "600",
   },
   {
      id: 4,
      page: "home_3",
      img: team_img8,
      title: "Sharukh",
      designation: "Booking and Docs Head",
      data_aos_delay: "800",
   },
   
   // inner_page
   {
      id: 1,
      page: "inner_page",
      img: team_img1,
      title: "Ammar Imtiaz",
      designation: "Trading Executive",
      data_aos_delay: "200",
   },
   {
      id: 2,
      page: "inner_page",
      img: team_img2,
      title: "Ahmed",
      designation: "Inventory Manager",
      data_aos_delay: "400",
   },
   {
      id: 3,
      page: "inner_page",
      img: team_img3,
      title: "Saif",
      designation: "Pricing Head",
      data_aos_delay: "600",
   },
   {
      id: 4,
      page: "inner_page",
      img: team_img4,
      title: "Daniyal",
      designation: "Finance Executive",
      data_aos_delay: "800",
   },
   {
      id: 5,
      page: "inner_page",
      img: team_img5,
      title: "Masood",
      designation: "Support Executive",
      data_aos_delay: "200",
   },
   {
      id: 6,
      page: "inner_page",
      img: team_img6,
      title: "Sharukh",
      designation: "Booking and Docs Head",
      data_aos_delay: "400",
   },
   {
      id: 7,
      page: "inner_page",
      img: team_img7,
      title: "Ibarahim",
      designation: "EQC Controller",
      data_aos_delay: "600",
   },
   {
      id: 8,
      page: "inner_page",
      img: team_img8,
      title: "Bilal",
      designation: "EQC Controller",
      data_aos_delay: "800",
   },
   {
      id: 9,
      page: "inner_page",
      img: team_img1,
      title: "Taha",
      designation: "Finance Executive",
      data_aos_delay: "200",
   },
   {
      id: 10,
      page: "inner_page",
      img: team_img2,
      title: "Sufiyan",
      designation: "Inventory Handler",
      data_aos_delay: "400",
   },
]

export default team_data;