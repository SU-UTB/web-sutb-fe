import { Routes as MainRoutes, Route } from 'react-router-dom';

import Contacts from './pages/ContactPage';
import Home from './pages/HomePage';
import Layout from './components/layout/Layout';

const Routes = () => {
    return (
        <MainRoutes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
            </Route>
        </MainRoutes>
    )
}

export default Routes