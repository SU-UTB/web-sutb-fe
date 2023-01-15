import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import IRoutesProps from '../interfaces/IRoutesProps';

export const ROUTE_PATHS = {
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
