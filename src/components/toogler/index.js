import React, { useMemo } from 'react'
import { Box } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
 
const Toogler = ({mode, setMode}) => {


        return (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
              }}
            >
              <IconButton sx={{ ml: 1 }} onClick={() => {mode === 'light' ? setMode('dark') : setMode('light')}} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          );
    }

    export default Toogler
