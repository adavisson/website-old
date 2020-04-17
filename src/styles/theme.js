import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003866',
      contrastText: '#ffb347',
    },
    secondary: {
      main: '#ffb347',
      contrastText: '#003866',
    }
  },
  typography: {
    fontFamily: [
      '"Titillium Web"',
      'sans-serif'
    ].join(',')
  }
})