
import Contact from "../../molecules/footer/contact/contact";
import Links from "../../molecules/footer/links/links";
import { Wrapper } from "./style";

const Footer = () => {
    return (
        <Wrapper>
            <Contact />

            <Links />
        </Wrapper>
    );
};

export default Footer;