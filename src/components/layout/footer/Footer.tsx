import { SU_CONTACTS, SU_SOC } from '../../../lib/constants/ContactsSocials';
import { Title, Wrapper } from './Footer.styled';

import BaseIcon from '../../shared/BaseIcon';
import BaseLink from '../../shared/BaseLink';
import BaseList from '../../shared/BaseList';

const Footer = () => {
    return (
        <Wrapper>
            <Title>Kontakty</Title>
            <BaseList>
                {SU_CONTACTS.map((item, index) => (
                    <li key={index}>
                        <BaseLink underline href={item.linkTo}>
                            {item.text}
                        </BaseLink>
                    </li>
                ))}
            </BaseList>
            <BaseList row gap={1.5}>
                {SU_SOC.map((item, index) => (
                    <li key={index}>
                        <BaseLink href={item.linkTo}>
                            <BaseIcon size={2.5}>
                                {item.imgIcon}
                            </BaseIcon>
                        </BaseLink>
                    </li>
                ))}
            </BaseList>
        </Wrapper >
    );
};

export default Footer;