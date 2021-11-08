import { useState } from 'react';

const useNetwork = () => { 

        const [useNetwork, setUseNetwork] = useState('minute');
        return { useNetwork, setUseNetwork };

 }

 export default useNetwork;