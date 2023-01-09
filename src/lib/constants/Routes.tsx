import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import IRoutesProps from "../interfaces/IRoutesProps";

export const ROUTE_PATHS = {
    ABOUT: {
        text: "O unii",
        linkTo: "/about",
    },
    CONTACT: {
        text: "Kontakty",
        linkTo: "/contacts",
    },
};

export const ROUTES: IRoutesProps[] = [
    {
        route: ROUTE_PATHS.ABOUT,
        component: <AboutPage />,
    },
    {
        route: ROUTE_PATHS.CONTACT,
        component: <ContactPage />,
    },

];
