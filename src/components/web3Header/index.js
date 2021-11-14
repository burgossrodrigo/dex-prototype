import  Wallets  from '../wallet'
import { useWeb3React } from "@web3-react/core"
import { Box, Modal } from "@mui/material"
import { StyledButton } from '../../style'
import styled from 'styled-components'
import HT from '../../assets/htlogo.png'
import BNB from '../../assets/binancelogo.png'
import ETHEREUM from '../../assets/ethereumlogo.png'

const LeftWrapperHeader = styled(Box)`

    height: max-content;
    display: flex;
    flex-direction: row;
    width: max-content;
    float: right;
    margin-right: 1vw;
    margin-top: 2vh;

`

const StyledCoinLogo = styled.img`

    margin-right: 1vw;

`

const WalletModal = ({openWallet, setOpenWallet}) => {

    const { active, account, chainId } = useWeb3React()


    const handleOpen = () => setOpenWallet(true);
    const handleClose = () => setOpenWallet(false);

    return(
    <>
    { active 

    ?

    <LeftWrapperHeader>
        {chainId === 1 ? <StyledCoinLogo width={30} src={ETHEREUM} /> : chainId === 56 ? <StyledCoinLogo width={30} src={BNB} /> : chainId === 128 ? <StyledCoinLogo width={30} src ={HT} /> : <div />}

            <StyledButton size="large" variant="contained" onClick={handleOpen}>{account.substring(0, 6)}...{account.substring(account.length - 4)}</StyledButton>
            <Modal
            open={openWallet}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box>
            <Wallets />
        </Box>
      </Modal>
      </LeftWrapperHeader>

    :

    <LeftWrapperHeader>
        {chainId === null ? <div /> : chainId === 1 ? <StyledCoinLogo width={30} src={ETHEREUM} /> : chainId === 56 ? <StyledCoinLogo width={30} src={BNB} /> : <StyledCoinLogo width={30} src ={HT} />}
        <StyledButton variant="contained" size="large" onClick={handleOpen}>Connect your wallet</StyledButton>
        <Modal
            open={openWallet}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box>
            <Wallets />
        </Box>
      </Modal>

    </LeftWrapperHeader>          
    }
    </>)

}

export default WalletModal