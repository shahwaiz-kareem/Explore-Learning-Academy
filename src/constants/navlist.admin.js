import { RiDashboardLine } from "react-icons/ri";
import { BiBook, BiPhoneCall } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
export const navList = [
  {
    heading: "ADMIN",
    pages: [
      { name: "Dashboard", href: "/dashboard", icon: RiDashboardLine },
      {
        name: "Batches",
        href: "/dashboard/batches",
        icon: AiOutlineUsergroupAdd,
      },
      { name: "Contact info", href: "/dashboard/contact", icon: BiPhoneCall },
      { name: "Settings", href: "/dashboard/settings", icon: BiCog },
      { name: "FAQs", href: "/dashboard/faqs", icon: AiOutlineQuestionCircle },
    ],
  },
  {
    heading: "Student Resources",
    pages: [{ name: "Notes&code", href: "/dashboard/notes", icon: BiBook }],
  },
];
