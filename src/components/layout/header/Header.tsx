import { Logo, Title, User } from './Header.styled';

import IHeaderProps from '../../../lib/interfaces/IHeaderProps';
import PersonSVG from '../../../assets/images/person.svg';
import SULogoSVG from '../../../assets/images/SULogo.svg';
import { Wrapper } from './wrapper/Wrapper.styled';

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