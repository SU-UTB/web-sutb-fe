import Title from "../../atoms/header/title";
import Logo from "../../atoms/header/logo";
import User from "../../atoms/header/user";

import { Wrapper } from "../../organisms/header/style";

const Header = () => {
    return (
        <Wrapper>
            <Logo src="/suLogo.svg" alt="Logo" />
            <Title>Domů</Title>
            <User src="/person.svg" alt="User" />
        </Wrapper>
    );
};

export default Header;