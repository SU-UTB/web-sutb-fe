import Header from "../organisms/header/header";
import Footer from "../organisms/footer/footer";
import { Outlet } from "react-router-dom";
import { Main, Wrapper } from "./style";

const Layout = () => {

    return (
        <Wrapper>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrapper>
    );
};

export default Layout;