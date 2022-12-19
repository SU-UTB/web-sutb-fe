import Link from '../../../atoms/footer/Link';
import Login from '../../../atoms/footer/Login';
import { Wrapper, LinksWrapper } from './style';

const Links = () => {

    type Link = {
        name: string;
        href: string;
    }
    const links: Link[] = [
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
                    <Link href={link.href}>{link.name}</Link>
                ))}
            </LinksWrapper>

            <Login href="/login">SU Login</Login>
        </Wrapper>
    );
};

export default Links;