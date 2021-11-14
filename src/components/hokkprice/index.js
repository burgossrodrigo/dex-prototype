import { Typography } from '@mui/material'
import HokkBscPrice from './hokkBsc'
import useHokkPrice from '../../hooks/useHokkPrice'
 


const HokkPrice = () => {

    const hokkPriceUsd = useHokkPrice()




  return(

    <Typography>
      
      <b>HOKK</b> / USDT <HokkBscPrice {...hokkPriceUsd} />
      
      </Typography>

  )


}

export default HokkPrice;