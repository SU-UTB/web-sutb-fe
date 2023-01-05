import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Contacts from './pages/ContactPage';
import Home from './pages/HomePage';
import Layout from './components/layout/Layout';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
