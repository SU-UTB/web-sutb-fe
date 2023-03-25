import { NavLink, Wrapper } from './Navbar.styled';

import INavbarProps from '../../../../lib/interfaces/INavbarProps';
import { LINKS } from '../../../../lib/constants/Routes';
import { useLocation } from 'react-router-dom';

const Navbar = ({ isOpen }: INavbarProps) => {
    const location = useLocation();
    return (
        <Wrapper isOpen={isOpen}>
            {LINKS.map((link, index) => (
                <NavLink key={index} href={link.linkTo} active={location.pathname === link.linkTo} aria-label={link.text}>
                    {link.text}
                </NavLink>
            ))}
        </Wrapper>
    );
};
export default Navbar;