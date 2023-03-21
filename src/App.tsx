import { getAnalytics, logEvent } from 'firebase/analytics';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import Theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { analyticsApp } from './tools/firebase';

const App = (): JSX.Element => {
  logEvent(getAnalytics(analyticsApp.app), 'web_displayed');
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider >
  )
};
export default App
