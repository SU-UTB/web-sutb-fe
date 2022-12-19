import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';

import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './style';
import { useEffect, useState } from 'react';

const Layout = () => {
    const [title, setTitle] = useState("");
    useEffect(() => {
        setTitle(() => {
            const parts = document.title.split("-");
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