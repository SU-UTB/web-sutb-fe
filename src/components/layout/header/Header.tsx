import { Logo, Title } from './Header.styled';

import BaseIcon from '../../shared/BaseIcon';
import IHeaderProps from '../../../lib/interfaces/IHeaderProps';
import { IoPerson } from 'react-icons/io5'
import LinkTo from '../../shared/LinkTo';
import SULogoSVG from '../../../assets/images/SULogo.svg';
import { Wrapper } from './wrapper/Wrapper.styled';

const Header = ({ title }: IHeaderProps) => {
    return (
        <Wrapper>
            <LinkTo href="/">
                <Logo src={SULogoSVG} alt="Logo" />
            </LinkTo>
            <Title>{title}</Title>
            <LinkTo href="/login">
                <BaseIcon size={1.5} circle>
                    <IoPerson />
                </BaseIcon>
            </LinkTo>
        </Wrapper>
    );
};
export default Header;