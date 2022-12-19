import Title from '../../atoms/header/Title';
import Logo from '../../atoms/header/Logo';
import User from '../../atoms/header/User';

import SULogoSVG from '../../../assets/images/SULogo.svg';
import PersonSVG from '../../../assets/images/person.svg';
import { Wrapper } from './style';
import IHeaderProps from '../../../lib/interfaces/IHeaderProps';

const Header = ({ title }: IHeaderProps) => {
    return (
        <Wrapper>
            <a href="/">
                <Logo src={SULogoSVG} alt="Logo" />
            </a>
            <Title>{title}</Title>
            <a href="/login">
                <User src={PersonSVG} alt="User" />
            </a>

        </Wrapper>
    );
};

export default Header;