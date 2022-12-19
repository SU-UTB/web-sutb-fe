import FooterLink from '../../../atoms/footer/FooterLink';
import Login from '../../../atoms/footer/Login';
import { Wrapper, LinksWrapper } from './style';

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
    ];

    return (
        <Wrapper>

            <LinksWrapper>
                {links.map((link) => (
                    <FooterLink href={link.href}>{link.name}</FooterLink>
                ))}
            </LinksWrapper>

            <Login href="/login">SU Login</Login>
        </Wrapper>
    );
};

export default Links;