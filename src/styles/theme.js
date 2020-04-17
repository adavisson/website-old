import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003866',
      contrastText: '#ffb347',
    },
    secondary: {
      main: '#ffb347',
      contrastText: '#003866',
    },
  },
  typography: {
    fontFamily: ['"Titillium Web"', 'sans-serif'].join(','),
  },
})

export const cardStyle = makeStyles({
  root: {
    width: '20rem',
    margin: '15px',
    backgroundColor: '#003866',
  },
  title: {
    fontSize: 'x-large',
    marginBottom: '10px'
  },
  body: {
    padding: '15px',
    backgroundColor: '#ffb347'
  },
  pos: {
    marginBottom: 12,
  },
})
