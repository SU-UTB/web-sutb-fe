import Title from '../../atoms/header/Title';
import Logo from '../../atoms/header/Logo';
import User from '../../atoms/header/User';

import { Wrapper } from './style';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <Wrapper>
            <a href="/">
                <Logo src="/suLogo.svg" alt="Logo" />
            </a>
            <Title>{title}</Title>
            <a href="/login">
                <User src="/person.svg" alt="User" />
            </a>
        </Wrapper>
    );
};

export default Header;