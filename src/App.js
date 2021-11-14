import GlobalStyle from './style/globalStyles'

//COMPPONENTS

import ChartData from './Bitquery.jsx'
import Header from './components/header'
import Web3Header from './components/web3Header';
import Swap from './components/swap'

//HOOKS

import usePeriod from './hooks/usePeriod'
import useNetwork from './hooks/useNetwork'
import useWallet from './hooks/useWallet'
import useHokkPrice from './hooks/useHokkPrice'

//WEB3-REACT

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

//MUI/MATERIAL

import { ThemeProvider, createTheme } from '@mui/material/styles';

//STYLED ELEMENTS

import { LeftPainel, RightPainel } from './style';

//APOLLO

import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client'
const client = new ApolloClient({
  
  uri: "https://graphql.bitquery.io",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
  "X-API-KEY": "BQYTYsxZMZA47wBr1PvuU8jYWieM3HSd"
  },  
  });

  function getLibrary(provider) {
    return new Web3(provider)
  }

function App() {

//THEME

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#325AFF'
    }
  },
  typography: {
    fontFamily: [
      "Inter-var", 
      "sans-serif"
    ].join(','),
  },
});

//HOOKS PROPS

const chartPeriod = usePeriod()
const networkName = useNetwork()
const openWallet = useWallet()
const priceForHokk = useHokkPrice()


//MAIN RETURN
  return (
    <>
    <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalStyle />
        <ThemeProvider theme={darkTheme}>
        <LeftPainel {...priceForHokk}>
          <Header  />
          <ApolloProvider client={client}>
            <ChartData {...chartPeriod} {...networkName} />
          </ApolloProvider>
          </LeftPainel>
        <RightPainel {...priceForHokk}>
            <Web3Header {...openWallet} />
            <Swap />
        </RightPainel>
        </ThemeProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
