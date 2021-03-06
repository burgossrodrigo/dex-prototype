
import React, { useState } from 'react';
import { gql, useQuery  } from '@apollo/client';
import { CircularProgress, FormControl,
         InputLabel, Select, MenuItem } from '@mui/material';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { StyledGridContainer, StyledGridItem } from './style'
import HokkPrice from './components/hokkprice';
import moment from 'moment';
import  styled  from 'styled-components';

const StyledCircularProgress = styled(CircularProgress)`

  margin-top: 50%;
  margin-left: 50%
  position: relative;

`
const StyledSpan = styled.span`

  color: #ffffff;

`

const StyledSelect = styled(Select)`

  background-color: #1A1A1B;

`


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
    quoteCurrency: {is: "0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8"}
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
            <StyledGridItem item xs={6} sm={6} md={6} lg={6} xl={6} >
                <HokkPrice />
            </StyledGridItem>
            <StyledGridItem item>    
                <FormControl name="chartPeriod">
                    <InputLabel id="demo-simple-select-helper-label"><StyledSpan>Period</StyledSpan></InputLabel>
                    <StyledSelect
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={chartPeriod}
                    label="chartPeriod"
                    onChange={handleChange}
                    >                    
                        <MenuItem value={"minute"}><StyledSpan>Minute</StyledSpan></MenuItem>
                        <MenuItem value={"day"}><StyledSpan>Day</StyledSpan></MenuItem>
                        <MenuItem value={"month"}><StyledSpan>Month</StyledSpan></MenuItem>    
                    </StyledSelect>
                </FormControl>
            </StyledGridItem>
            <StyledGridItem xs={3} sm={3} md={3} lg={3} xl={3}>
            <StyledCircularProgress />
            </StyledGridItem>           
          </StyledGridContainer>
      
          
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
                    <InputLabel id="demo-simple-select-helper-label"><StyledSpan>Period</StyledSpan></InputLabel>
                    <StyledSelect
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={chartPeriod}
                    label="chartPeriod"
                    onChange={handleChange}
                    >                    
                        <MenuItem value={"minute"}><StyledSpan>Minute</StyledSpan></MenuItem>
                        <MenuItem value={"day"}><StyledSpan>Day</StyledSpan></MenuItem>
                        <MenuItem value={"month"}><StyledSpan>Month</StyledSpan></MenuItem>    
                    </StyledSelect>
                </FormControl>
            </StyledGridItem>
            <StyledGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
            <ResponsiveContainer width='100%' height={400} >
                    <AreaChart data={changedData}>                  
                        <Area dataKey="value" />
                    </AreaChart>
                </ResponsiveContainer>
            </StyledGridItem>         
          </StyledGridContainer>

    
      </>
      
  
      );
  
  
  
  


}



export default Bitquery;

