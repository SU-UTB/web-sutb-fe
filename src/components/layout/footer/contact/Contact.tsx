import { SU_CONTACTS, SU_SOC } from '../../../../lib/constants/ContactsSocials';

import BaseIcon from '../../../shared/BaseIcon';
import BaseList from '../../../shared/BaseList';
import { ContactsWrapper, } from '../wrapper/Wrapper.styled';
import LinkTo from '../../../shared/LinkTo';
import { Title } from './Contact.styled';

const Contact = () => {
    return (
        <ContactsWrapper>
            <Title>Kontakty</Title>
            <BaseList marginBlock={1} fontSize={.9}>
                {SU_CONTACTS.map((item, index) => (
                    <li key={index}>
                        <LinkTo underline href={item.linkTo} target="_blank" rel="noreferrer">
                            {item.text}
                        </LinkTo>
                    </li>
                ))}
            </BaseList>
            <BaseList row gap={1.5} fontSize={1}>
                {SU_SOC.map((item, index) => (
                    <li key={index}>
                        <LinkTo href={item.linkTo} target="_blank" rel="noreferrer">
                            <BaseIcon size={2} color="var(--clr-primary)">
                                {item.imgIcon}
                            </BaseIcon>
                        </LinkTo>
                    </li>
                ))}
            </BaseList>
        </ContactsWrapper >
    );
};
export default Contact;