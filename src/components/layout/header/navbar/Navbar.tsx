import BaseLink from '../../../shared/BaseLink';
import INavbarProps from '../../../../lib/interfaces/INavbarProps';
import { LINKS } from '../../../../lib/constants/Routes';
import { Wrapper } from './Navbar.styled';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';

const Navbar = ({ isOpen }: INavbarProps) => {
    const location = useLocation();

    return (
        <Wrapper isMobile={isMobile} isOpen={isOpen}>
            {LINKS.map((link, index) => (
                <BaseLink href={link.linkTo} key={index} active={location.pathname === link.linkTo}>
                    {link.text}
                </BaseLink>
            ))}
        </Wrapper>
    );
};
export default Navbar;