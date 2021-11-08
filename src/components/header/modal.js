import { StyledButton } from '../../style'
import { Wallets } from '../wallet';

const WalletModal = ({openWallet, setOpenWallet}) => {

    const handleOpen = () => setOpenWallet(true);
    const handleClose = () => setOpenWallet(false);

    return(
<>
        <StyledButton onClick={handleOpen}>Open modal</StyledButton>
      <Modal
        open={openWallet}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Wallets />
        </Box>
      </Modal>        

    </>)

}

export default WalletModal