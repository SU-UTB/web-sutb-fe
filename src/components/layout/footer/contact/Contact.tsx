import { ContactWrapper, ContactsWrapper, SocialIconWrapper } from '../wrapper/Wrapper.styled';
import { Icon, Title } from './Contact.styled';
import { SU_CONTACTS, SU_SOC } from '../../../../lib/constants/ContactsSocials';

import LinkTo from '../../../shared/LinkTo';

const Contact = () => {
    return (
        <ContactWrapper>
            <Title>Kontakty</Title>
            <ContactsWrapper>
                {SU_CONTACTS.map((item, index) => (
                    <LinkTo underline key={index} href={item.linkTo} target="_blank" rel="noreferrer">
                        {item.text}
                    </LinkTo>
                ))}
            </ContactsWrapper>
            <SocialIconWrapper>
                {SU_SOC.map((item, index) => (
                    <Icon key={index}>
                        <LinkTo href={item.linkTo} target="_blank" rel="noreferrer">{item.text}</LinkTo>
                    </Icon>
                ))}
            </SocialIconWrapper>
        </ContactWrapper >
    );
};

export default Contact;