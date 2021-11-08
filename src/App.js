import './App.css';

//COMPPONENTS

import ChartData from './Bitquery.jsx'
import Header from './components/header'

//HOOKS

import usePeriod from './hooks/usePeriod'
import useNetwork from './hooks/useNetwork'
import useWallet from './hooks/useWallet'

//WEB3-REACT

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

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

//HOOKS PROPS
const chartPeriod = usePeriod();
const networkName = useNetwork();
const openWallet = useWallet();


//MAIN RETURN
  return (
    <>
    <Web3ReactProvider getLibrary={getLibrary}>
        <LeftPainel>
        <Header {...openWallet} />
        <ApolloProvider client={client}>
          <ChartData {...chartPeriod} {...networkName} />
        </ApolloProvider>
        </LeftPainel>
        <RightPainel>
          Swap
        </RightPainel>
      </Web3ReactProvider>
    </>
  );
}

export default App;
