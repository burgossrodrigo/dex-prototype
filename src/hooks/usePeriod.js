import { useState } from 'react';

const usePeriod = () => { 

        const [chartPeriod, setChartPeriod] = useState('minute');
        return { chartPeriod, setChartPeriod };

 }

 export default usePeriod;