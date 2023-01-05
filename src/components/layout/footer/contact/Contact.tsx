import { ContactWrapper, ContactsWrapper, SocialIconWrapper } from '../wrapper/Wrapper.styled';
import { Icon, Mail, Phone, Title } from './Contact.styled';

const Contact = () => {
    return (
        <ContactWrapper>
            <Title>Kontakty</Title>
            <ContactsWrapper>
                <Mail href="mailto:su@sutb.cz">su@sutb.cz</Mail>
                <Phone href="tel:+420 773 392 020">773 392 020</Phone>
            </ContactsWrapper>
            <SocialIconWrapper>
                <Icon>
                    Fb
                </Icon>
                <Icon>
                    Ig
                </Icon>
            </SocialIconWrapper>
        </ContactWrapper>
    );
};

export default Contact;