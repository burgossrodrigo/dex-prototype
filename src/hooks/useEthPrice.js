import { useState } from 'react';

const useEthPrice = () => { 

        const [ethPrice, setEthPrice] = useState({});
        return { ethPrice, setEthPrice };

 }

 export default useEthPrice;