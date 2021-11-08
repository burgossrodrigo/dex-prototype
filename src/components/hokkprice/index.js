import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'



const HokkPrice = () => {

    const [hokkPrice, setHokkPrice] = useState();

  
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.pancakeswap.info/api/v2/tokens/0x36a92f809da8c2072b090a9e3322226c5376b207', {cache: "force-cache"})
        .then(response => response.json())
        .then(fetchData => setHokkPrice(fetchData.data.price));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  return(

    <Typography variant='h5'>HOKK / USDT {Number(hokkPrice).toFixed(13)}</Typography>

  )


}

export default HokkPrice;