import { IoClose, IoMenu } from 'react-icons/io5';
import { Logo, MenuButton, Title, Wrapper } from './Header.styled';

import BaseLink from '../../shared/BaseLink';
import IHeaderProps from '../../../lib/interfaces/IHeaderProps';
import Navbar from './navbar/Navbar';
import SULogoSVG from '../../../assets/images/suLogo.svg';
import SULogoText from '../../../assets/images/SU_logo_sirka_04_RGB.webp';
import { useState } from 'react';

const Header = ({ title }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <BaseLink href="/" aria-label="Domů">
        <Logo src={SULogoText} alt="Logo s textem" width={200} height={29} desktop={true} />
        <Logo src={SULogoSVG} alt="Logo symbol" width={40} height={40} desktop={false} />
      </BaseLink>
      <Title>{title}</Title>
      <MenuButton onClick={() => handleToggle()} aria-label="Menu">
        {isOpen ? <IoClose /> : <IoMenu />}
      </MenuButton>
      <Navbar isOpen={isOpen} />
    </Wrapper>
  );
};
export default Header;
