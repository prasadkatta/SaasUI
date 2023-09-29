import { extendTheme } from '@chakra-ui/react'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'
import './App.css';
import * as React from 'react'
import Sidenav from './Components/Sidenav'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors }, baseTheme)
function App() {
  return (
    <SaasProvider theme={theme}>    
      <Sidenav />
    </SaasProvider>
  );
}

export default App;
