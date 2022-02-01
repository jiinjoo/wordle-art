import * as React        from 'react'
import ReactDOM          from 'react-dom'
import CssBaseline       from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme             from './utils/site-theme'
import App               from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)
