import { SU_CONTACTS, SU_SOC } from '../../../../lib/constants/ContactsSocials';

import BaseIcon from '../../../shared/BaseIcon';
import BaseLink from '../../../shared/BaseLink';
import BaseList from '../../../shared/BaseList';
import { ContactsWrapper, } from '../wrapper/Wrapper.styled';
import { Title } from './Contact.styled';

const Contact = () => {
    return (
        <ContactsWrapper>
            <Title>Kontakty</Title>
            <BaseList marginBlock={1} fontSize={.9}>
                {SU_CONTACTS.map((item, index) => (
                    <li key={index}>
                        <BaseLink underline href={item.linkTo}>
                            {item.text}
                        </BaseLink>
                    </li>
                ))}
            </BaseList>
            <BaseList row gap={1.5} fontSize={1}>
                {SU_SOC.map((item, index) => (
                    <li key={index}>
                        <BaseLink href={item.linkTo}>
                            <BaseIcon size={2.5} color="var(--clr-primary)">
                                {item.imgIcon}
                            </BaseIcon>
                        </BaseLink>
                    </li>
                ))}
            </BaseList>
        </ContactsWrapper >
    );
};
export default Contact;