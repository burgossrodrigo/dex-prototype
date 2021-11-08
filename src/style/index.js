//import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledActiveTimeFrame = styled(Box)`

    width: max-content;
    height: max-content;

`

export const StyledUnactivedTimeFrame = styled(Box)`

    width: max-content;
    height: max-content;
    background-color: blue;
    color: white;
    border radius: 1px 1px 1px 1px;
   

`

export const StyledGridContainer = styled(Grid)`

    margin-top: 15vh;


`

export const StyledGridItem = styled(Grid)`

    margin: 5px;

`

export const AccountDiv = styled.div`
 
position: relative;
float: right;
margin-left: 110%;

`

export const StyledNavbar = styled.div`


width: 63%;
display: flex;
flex-direction: row;
height: 10vh;
position: relative;
margin-right: 34vw;
z-index: -1;

`

export const StyledButton = styled(Button)`


width: max-content;
height: 5vh;
position: relative;
margin: 2vh;

`

//SWAP

export const MainWrapper = styled(Box)`

    display: flex;
    flex-direction: row;

`

export const RightPainel = styled(Box)`

    width: 34%;
    height: 100vh;
    float: right;
    z-index: 10001;

`

export const LeftPainel = styled(Box)`

    width: 65%;
    float: left;

`

