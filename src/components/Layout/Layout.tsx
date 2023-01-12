import { useEffect, useState } from 'react';

import Cookies from './cookies/Cookies';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './wrapper/Wrapper.styled';

const Layout = () => {
    const [title, setTitle] = useState('');
    const [cookies, setCookies] = useState(false);
    const handleAccept = () => {
        return setCookies(true);
    };
    useEffect(() => {
        setTitle(() => {
            const parts = document.title.split('-');
            return parts[0].trim();
        })
    }, []);
    return (
        <Wrapper>
            <Header title={title} />
            <Main>
                <Outlet />
            </Main>
            <Footer />
            {!cookies
                ? <Cookies handleAccept={handleAccept} />
                : null
            }
        </Wrapper>
    );
};

export default Layout;