import { useWeb3React } from "@web3-react/core"
import { injected } from "../connectors"
import { Button, Box} from '@mui/material'
import styled from 'styled-components'

export default function Wallets() {
  const { active, account, activate, deactivate } = useWeb3React()


  const StyledBox = styled(Box)`
  
    background-color: #F19235;
    box-shadow: 3px 3px 10px;
    width: 40%;
    height: maxt-content;
    margin-top: 20vh;
    margin-left: 30vw;
  `

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <StyledBox>
      <Button onClick={connect}>Connect to MetaMask</Button>
      {active ? <span>Connected with <b>{account.substring(0, 6)}...{account.substring(account.length - 4)}</b></span> : <span>Not connected</span>}
      <Button onClick={disconnect}>Disconnect</Button>
    </StyledBox>
  )
}

export default Wallets;