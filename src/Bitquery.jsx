
import React, { useState } from 'react';
import { gql, useQuery  } from '@apollo/client';
import { CircularProgress, FormControl,
         InputLabel, Select, MenuItem } from '@mui/material';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { StyledGridContainer, StyledGridItem } from './style'
import HokkPrice from './components/hokkprice';
import moment from 'moment';



const Bitquery = ({chartPeriod, setChartPeriod}) =>{

    /* STATE MANEGENT */

    const [network, setNetwork] = useState('bsc');

    
    console.log(setNetwork);
    /* STATE MANEGENT */




    /* ################################################################################### */

   
   
   
    /* VARIABLE DECLARATION */

    var limit  = chartPeriod === 'minute' ? 100 : chartPeriod === 'month' ? 1000 : 500;
    var since =  chartPeriod === 'minute' ? moment(Date.now() - 7*24*3600*1000).format('yyyy-MM-DD') : chartPeriod === 'month' ? moment( Date.now() - 180*24*3600*1000 ).format('yyyy-MM-DD') : moment( Date.now() - 6*24*3600*1000 ).format('yyyy-MM-DD');
    var count  = chartPeriod === 'minute' ? 5 : chartPeriod === 'month' ? 1000 : 250;
    console.log(since)
    console.log(moment( Date.now() - 5*24*3600*1000 ).format('yyyy-MM-DD'))
   /* VARIABLE DECLARATION */
 
   
   
   /* ################################################################################### */
     
     
/* GRAPHQL CHART */

        const CHART_DATA =  gql`
        query chart{
    ethereum(network: ${network}) {
    dexTrades(
    options: {limit: ${limit}, asc: "timeInterval.minute"}
    date: {since: "${since}"}
    exchangeName: {in:["Pancake","Pancake v2"]}
    baseCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
    quoteCurrency: {is: "0x36a92f809da8c2072b090a9e3322226c5376b207"}
    ) {
    timeInterval {
        minute(count: ${count})
    }
    baseCurrency {
        symbol
        address
    }
    baseAmount
    quoteCurrency {
        symbol
        address
    }
    quoteAmount
    trades: count
    quotePrice
    maximum_price: quotePrice(calculate: maximum)
    minimum_price: quotePrice(calculate: minimum)
    open_price: minimum(of: block, get: quote_price)
    close_price: maximum(of: block, get: quote_price)
    }
    }
    }
    `;

/* GRAPHQL CHART */



  const { loading, data } = useQuery(CHART_DATA);
  
  let changedData = [];

  const handleChange = (event) => {
    setChartPeriod(event.target.value);
  };
  

  
  if (loading) 
  
  return (<>

<StyledGridContainer container>
            <StyledGridItem item>
                <FormControl name="chartPeriod">
                    <InputLabel id="demo-simple-select-helper-label">chartPeriod</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={chartPeriod}
                    label="chartPeriod"
                    onChange={handleChange}
                    >                    
                        <MenuItem value={"minute"}>Minute</MenuItem>
                        <MenuItem value={"day"}>Day</MenuItem>
                        <MenuItem value={"month"}>Month</MenuItem>    
                    </Select>
                </FormControl>
            </StyledGridItem>           
          </StyledGridContainer>
  
  < CircularProgress />
  
  </>)


  console.log(data)
  console.log(typeof data.ethereum)
  console.log(typeof data.ethereum.dexTrades)

  if(chartPeriod === 'minute'){

    data.ethereum.dexTrades.map((chart_) => {
        changedData.push({
          time: chart_.timeInterval.minute,
          value: chart_.maximum_price*Math.pow(10,12)
        });

        return changedData;
    })

  }
  if(chartPeriod === 'day'){

    data.ethereum.dexTrades.map((chart_) => {
        changedData.push({
          time: chart_.timeInterval.day,
          value: chart_.maximum_price*Math.pow(10,12)
        });

        return changedData;

    })

  }
  if(chartPeriod === 'month'){

    data.ethereum.dexTrades.map((chart_) => {
        changedData.push({
          time: chart_.timeInterval.month,
          value: chart_.maximum_price*Math.pow(10,12)
        });
        
        return changedData;
    })    

  }
  console.log(limit)
  console.log(chartPeriod)
  console.log(changedData)
  
  return (
          
      <>   
          <StyledGridContainer container>
          <StyledGridItem item xs={6} sm={6} md={6} lg={6} xl={6} >
                <HokkPrice />
            </StyledGridItem>   
            <StyledGridItem item xs={6} sm={6} md={6} lg={6} xl={6} >
                <FormControl name="chartPeriod">
                    <InputLabel id="demo-simple-select-helper-label">chartPeriod</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={chartPeriod}
                    label="chartPeriod"
                    onChange={handleChange}
                    >                    
                        <MenuItem value={"minute"}>Minute</MenuItem>
                        <MenuItem value={"day"}>Day</MenuItem>
                        <MenuItem value={"month"}>Month</MenuItem>    
                    </Select>
                </FormControl>
            </StyledGridItem>         
          </StyledGridContainer>
          <ResponsiveContainer width='100%' height={400} >
                    <AreaChart data={changedData}>                  
                        <Area dataKey="value" />
                    </AreaChart>
                </ResponsiveContainer> 
      </>
      
  
      );
  
  
  
  


}



export default Bitquery;

