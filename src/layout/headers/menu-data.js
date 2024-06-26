import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "#",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "#",
    active: "",
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Services Details" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "#",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      { link: "/404", title: "404" }, 
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "#",
    active: "",
  },
  

];
export default menu_data;
