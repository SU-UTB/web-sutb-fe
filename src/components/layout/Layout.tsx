import { Main, Wrapper } from './Layout.styled';
import { useEffect, useState } from 'react';

import { CookiesProvider } from '../../context/cookies/CookiesContext';
import Footer from './footer/Footer';
import HeadHelmet from '../head/HeadHelmet';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import { ROUTE_PATHS } from '../../lib/constants/Routes';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case ROUTE_PATHS.HOME.linkTo:
                setTitle('Domů');
                break;
            case ROUTE_PATHS.ABOUT.linkTo:
                setTitle('O nás');
                break;
            case ROUTE_PATHS.CONTACT.linkTo:
                setTitle('Kontakt');
                break;
        }
    }, [location.pathname]);
    return (
        <CookiesProvider>
            <HeadHelmet title={title} />
            <Wrapper>
                <Header title={title} />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Wrapper>
        </CookiesProvider>
    )
};
export default Layout;