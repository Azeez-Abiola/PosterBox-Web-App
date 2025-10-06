import MobileNavComp from "./MobileNavComp.vue";
import NavbarComp from "./NavbarComp.vue";

type Navlink = {
  route: string;
  title: string;
};

export const navlinks: Navlink[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Services",
    route: "/services",
  },
];

export { MobileNavComp };

export default NavbarComp;
