import Icon from '../../../atoms/footer/contact/Icon';
import Mail from '../../../atoms/footer/contact/Mail';
import Phone from '../../../atoms/footer/contact/Phone';
import Title from '../../../atoms/footer/contact/Title';
import { Wrapper, ContactsWrapper, SocialIconWrapper } from './style';

const ContactWrapper = () => {
    return (
        <Wrapper>
            <Title>Kontakty</Title>

            <ContactsWrapper>
                <Mail href="mailto:su@sutb.cz">su@sutb.cz</Mail>
                <Phone href="tel:+420 773 392 020">773 392 020</Phone>
            </ContactsWrapper>

            <SocialIconWrapper>
                <Icon>
                    <img alt="Fb" />
                </Icon>
                <Icon>
                    <img alt="Ig" />
                </Icon>
            </SocialIconWrapper>
        </Wrapper>
    );
};

export default ContactWrapper;