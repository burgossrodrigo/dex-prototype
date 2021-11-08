import { useWeb3React } from '@web3-react/core'
import { StyledButton } from '../../style'

const Account = ({openWallet, setOpenWallet}) => {


  const { account } = useWeb3React()

  return (
    <>
      
      <StyledButton onClick={() =>{openWallet === true ? setOpenWallet(false) : setOpenWallet(true) }}>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
    </StyledButton>
    </>
  )
}

export default Account;