import { FooterLink, Login } from './Links.styled';

import { LinksWrapper } from '../wrapper/Wrapper.styled';

const Links = () => {
    type FooterLink = {
        name: string;
        href: string;
    }
    const links: FooterLink[] = [
        {
            name: "Domů",
            href: "/",
        },
        {
            name: "O unii",
            href: "/about",
        },
        {
            name: "Kontakty",
            href: "/contacts",
        },
    ];
    return (
        <LinksWrapper>
            {links.map((link) => (
                <FooterLink href={link.href}>{link.name}</FooterLink>
            ))}
            <Login href="/login">SU Login</Login>
        </LinksWrapper>
    );
};

export default Links;