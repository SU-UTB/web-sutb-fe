import { useEffect, useState } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './wrapper/Wrapper.styled';

const Layout = () => {
    const [title, setTitle] = useState('');
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
        </Wrapper>
    );
};

export default Layout;