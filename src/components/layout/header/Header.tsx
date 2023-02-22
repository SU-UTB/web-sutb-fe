import { Logo, Title } from './Header.styled';

import BaseIcon from '../../shared/BaseIcon';
import BaseLink from '../../shared/BaseLink';
import IHeaderProps from '../../../lib/interfaces/IHeaderProps';
import { IoPerson } from 'react-icons/io5'
import SULogoSVG from '../../../assets/images/suLogo.svg';
import { Wrapper } from './wrapper/Wrapper.styled';

const Header = ({ title }: IHeaderProps) => {
    return (
        <Wrapper>
            <BaseLink href="/">
                <Logo src={SULogoSVG} alt="Logo" />
            </BaseLink>
            <Title>{title}</Title>
            <BaseLink href="/login">
                <BaseIcon size={2} circle>
                    <IoPerson />
                </BaseIcon>
            </BaseLink>
        </Wrapper>
    );
};
export default Header;