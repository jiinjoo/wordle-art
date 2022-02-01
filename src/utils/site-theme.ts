import { createTheme } from '@mui/material/styles'

const wordleTheme = createTheme({
  palette: {
    success: {
      main: '#6AAA64',
    },
    warning: {
      main: '#C9B458',
    },
    error: {
      main: '#787C7E',
    },
    info: {
      main: '#D3D6DA',
    },
  },
})

export default wordleTheme
