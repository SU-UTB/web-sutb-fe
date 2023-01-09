import { FooterLink, Login } from './Links.styled';

import { LinksWrapper } from '../wrapper/Wrapper.styled';
import TImageLinkTypes from '../../../../lib/types/TImageLinkTypes';

const Links = () => {
    const links: TImageLinkTypes[] = [
        {
            text: "Domů",
            linkTo: "/",
        },
        {
            text: "O unii",
            linkTo: "/about",
        },
        {
            text: "Kontakty",
            linkTo: "/contacts",
        },
    ];
    return (
        <LinksWrapper>
            {links.map((link) => (
                <FooterLink href={link.linkTo}>{link.text}</FooterLink>
            ))}
            <Login href="/login">SU Login</Login>
        </LinksWrapper>
    );
};

export default Links;