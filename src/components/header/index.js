import React from 'react'; 
import { useWeb3React } from '@web3-react/core'
import Account from '../account'
import { StyledNavbar, AccountDiv, StyledButton } from '../../style';



export default function Header({openWallet, setOpenWallet}) {

  const { active } = useWeb3React();
	
	 /* <ChainId />
        <Account />
        <Balance /> */

  return (
    <>
      <div />
    </>
  )
}