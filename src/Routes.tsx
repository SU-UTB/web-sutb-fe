import { Routes as MainRoutes, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import Layout from './components/layout/Layout';
import { ROUTES } from './lib/constants/Routes';

const Routes = () => {
    return (
        <MainRoutes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {ROUTES.map(({ route, component }) => (
                    <Route key={route.linkTo} path={route.linkTo} element={component} />
                ))}
            </Route>
        </MainRoutes>
    )
};
export default Routes