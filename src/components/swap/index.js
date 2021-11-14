import React from 'react';
import { Grid, TextField, FormControl } from '@mui/material'
import styled from 'styled-components'

const StyledGridSwap = styled(Grid)`

    background-color: blue;

` 

const Swap = () => {

    return(

    <>  <FormControl>
            <StyledGridSwap container>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <TextField variant="filled" type="number" InputLabelProps={{shrink: true}} label="Number" />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <TextField variant="filled" type="number" InputLabelProps={{shrink: true}} label="Number" />
                </Grid>
            </StyledGridSwap>
        </FormControl>    
    </>    

    );

}

export default Swap