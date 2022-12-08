import Title from "../../../atoms/footer/contact/title";
import Mail from "../../../atoms/footer/contact/mail";
import Phone from "../../../atoms/footer/contact/phone";

import { Wrapper, ContactsWrapper, SocialIconWrapper } from "./style";
import Icon from "../../../atoms/footer/contact/icon";

const ContactWrapper = () => {
    return (
        <Wrapper>
            <Title>Kontakt</Title>

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