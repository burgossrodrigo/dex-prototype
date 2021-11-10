import { useState } from 'react';

const useHokkPrice = () => { 

        const [hokkPrice, setHokkPrice] = useState();
        return { hokkPrice, setHokkPrice };

 }

 export default useHokkPrice;