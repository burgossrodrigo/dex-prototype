import React from 'react'; 
import { useWeb3React } from '@web3-react/core'
import Account from '../account'
import { StyledNavbar, AccountDiv } from '../../style'
import { Button } from '@mui/material'



export default function Header({openWallet, setOpenWallet}) {

  const { active } = useWeb3React();
	
	 /* <ChainId />
        <Account />
        <Balance /> */

  return (
    <>
      <StyledNavbar>
      <AccountDiv>{active ? <Account /> : <Button onClick={() => {openWallet === true ? setOpenWallet(false) : setOpenWallet(true) }} >No wallet connected</Button>}</AccountDiv>		
      </StyledNavbar>
    </>
  )
}