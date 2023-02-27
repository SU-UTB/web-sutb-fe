import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import IRoutesProps from '../interfaces/IRoutesProps';

export const ROUTE_PATHS = {
    HOME: {
        text: "Domů",
        linkTo: "/",
    },
    ABOUT: {
        text: "O unii",
        linkTo: "/o-nas",
    },
    CONTACT: {
        text: "Kontakty",
        linkTo: "/kontakty",
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

export const LINKS = [
    ROUTE_PATHS.ABOUT,
    ROUTE_PATHS.CONTACT,
];

LINKS.unshift(ROUTE_PATHS.HOME);