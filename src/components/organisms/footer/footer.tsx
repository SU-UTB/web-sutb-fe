import Contact from '../../molecules/footer/contact/Contact';
import Links from '../../molecules/footer/links/Links';
import { Wrapper } from './style';

const Footer = () => {
    return (
        <Wrapper>
            <Contact />
            <Links />
        </Wrapper>
    );
};

export default Footer;