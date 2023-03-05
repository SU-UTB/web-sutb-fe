import GlobalStyle from './styles/global';
import Routes from './Routes';
import Theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider >
  )
};
export default App
