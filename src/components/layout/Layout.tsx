import { Main, Wrapper } from './Layout.styled';
import { useEffect, useState } from 'react';

import { CookiesProvider } from '../../context/cookies/CookiesContext';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        setTitle(() => {
            const parts = document.title.split('-');
            return parts[0].trim();
        })
    }, []);
    return (
        <CookiesProvider>
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