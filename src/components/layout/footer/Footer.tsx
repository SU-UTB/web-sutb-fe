import Contact from './contact/Contact';
import Links from './links/Links';
import { Wrapper } from './wrapper/Wrapper.styled';

const Footer = () => {
    return (
        <Wrapper>
            <Contact />
            <Links />
        </Wrapper>
    );
};

export default Footer;