import { useState, useEffect } from 'react'
import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk"



export const HokkBscPrice = ({ hokkPrice, setHokkPrice }) => {

    const [usdEther, setUsdEther] = useState()

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT', {cache: "force-cache"})
            .then(response => response.json())
            .then(fetchData => setUsdEther(fetchData.price));
      
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
      }, []);


    const BSC_HOKK = new Token(ChainId.MAINNET, "0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8", 18, 'HOKK', 'Hokkaido Inu')

    async function getPair () {

        const chainId = ChainId.MAINNET
        const BSC_PAIR = await Fetcher.fetchPairData(BSC_HOKK, WETH[chainId])
        const BSC_ROUTE = new Route([BSC_PAIR], WETH[chainId])
        const BSC_PRICE = new Promise(function(resolve, reject) {

            if(BSC_ROUTE) {

                resolve(
                    
                    setHokkPrice(BSC_ROUTE.midPrice.toFixed(9)),
                    console.log(BSC_ROUTE.midPrice.toFixed(9))
                
                )

            }else
                {

                    reject(Error('It broke'))

                }

        })

        return BSC_PRICE
    }

    getPair()
    console.log(getPair())

        return(<>{( 1 / hokkPrice) * usdEther }</>)

}

export default HokkBscPrice


