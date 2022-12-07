import Link from "../../../atoms/footer/link";
import Login from "../../../atoms/footer/login";
import { Wrapper, LinksWrapper } from "./style";

const Links = () => {
    //TODO
    const links = [
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