import { Typography } from '@mui/material'
import HokkBscPrice from './hokkBsc'
import { useWeb3React } from '@web3-react/core'
import useHokkPrice from '../../hooks/useHokkPrice'
 


const HokkPrice = () => {

    const { chainId } = useWeb3React()
    const hokkPriceUsd = useHokkPrice()




  return(

    <Typography>
      
      <b>HOKK</b> / USDT <HokkBscPrice {...hokkPriceUsd} />
      
      </Typography>

  )


}

export default HokkPrice;