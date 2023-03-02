import { IoClose, IoMenu } from 'react-icons/io5';
import { LogoSVG, LogoText, MenuButton, Title, Wrapper } from './Header.styled';

import BaseLink from '../../shared/BaseLink';
import IHeaderProps from '../../../lib/interfaces/IHeaderProps';
import Navbar from './navbar/Navbar';
import SULogoSVG from '../../../assets/images/suLogo.svg';
import SULogoText from '../../../assets/images/SU_logo_sirka_04_RGB.png';
import { useState } from 'react';

const Header = ({ title }: IHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Wrapper>
            <BaseLink href="/">
                <LogoText src={SULogoText} alt="Logo s textem" size={200} />
                <LogoSVG src={SULogoSVG} alt="Logo symbol" size={50} />
            </BaseLink>
            <Title>{title}</Title>
            <MenuButton onClick={() => handleToggle()}>
                {isOpen ? <IoClose /> : <IoMenu />}
            </MenuButton>
            <Navbar isOpen={isOpen} />
        </Wrapper >
    );
};
export default Header;