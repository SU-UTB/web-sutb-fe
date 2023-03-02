import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  )
};
export default App
