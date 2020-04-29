import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { Autorenew } from '@material-ui/icons'

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

export const bottomBarStyle = makeStyles((theme) => ({
  appBar: {
    height: 40,
    top: 'auto',
    bottom: 0,
  },
  link: {
    '&:hover': {
      color: '#ffb347',
      textDecoration: 'none',
    },
  },
  divider: {
    backgroundColor: '#ffb347',
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontSize: 'x-small',
    marginLeft: '15px',
    marginRight: '15px',
  },
  toolbar: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  }
}))


const drawerWidth = 240

export const navStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexGrow: 1,
    // marginBottom: '15px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#003866',
    color: '#ffb347',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#ffb347',
    color: '#003866',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    martingLeft: 0,
  },
  link: {
    '&:hover': {
      color: '#ffb347',
      textDecoration: 'none',
    },
  },
  divider: {
    backgroundColor: '#ffb347',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    alignContent: 'center',    
    '&:hover': {
      color: '#ffb347',
      textDecoration: 'none',
    },
  }
}));