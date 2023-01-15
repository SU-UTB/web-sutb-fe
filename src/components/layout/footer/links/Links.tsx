import { FooterLink, Login } from './Links.styled';

import { LinksWrapper } from '../wrapper/Wrapper.styled';
import { ROUTES } from '../../../../lib/constants/Routes';

const Links = () => {
    const home = {
        text: "Domů",
        linkTo: "/",
    };
    const links = ROUTES.map(({ route }) => ({
        text: route.text,
        linkTo: route.linkTo,
    }));
    links.unshift(home);
    return (
        <LinksWrapper>
            {links.map((link, index) => (
                <FooterLink key={index} href={link.linkTo}>{link.text}</FooterLink>
            ))}
            <Login href="/login">SU Login</Login>
        </LinksWrapper>
    );
};

export default Links;