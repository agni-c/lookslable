import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Portrait } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import PuserFragment from './fragments/puserFragment';
import IuserFragment from './fragments/iuserFragment';
import BookingFragment from './fragments/bookingFragment';
import LandMarkFragment from './fragments/landMarkFragment';
import ApprovedPhotos from './fragments/approvedPhotosFragment2';
import {
  List,
  ListItem,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
  Toolbar,
  CssBaseline,
  AppBar,
  Drawer,
  makeStyles,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' noWrap>
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />

          <div className={classes.drawerContainer}>
            <List>
              <Link to='/puser'>
                <ListItem button>
                  <ListItemIcon>
                    <Portrait />
                  </ListItemIcon>
                  <ListItemText primary='P user' />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to='/iuser'>
                <ListItem button>
                  <ListItemIcon>
                    <Portrait />
                  </ListItemIcon>
                  <ListItemText primary='I user' />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to='/bookings'>
                <ListItem button>
                  <ListItemIcon>
                    <Portrait />
                  </ListItemIcon>
                  <ListItemText primary='Bookings' />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to='/landmark'>
                <ListItem button>
                  <ListItemIcon>
                    <Portrait />
                  </ListItemIcon>
                  <ListItemText primary='Landmark' />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to='/approvedphotos'>
                <ListItem button>
                  <ListItemIcon>
                    <Portrait />
                  </ListItemIcon>
                  <ListItemText primary='Approved Photos' />
                </ListItem>
              </Link>
            </List>
            <Divider />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          {/* <PuserFragment /> */}
          {/* <BookingFragment /> */}
          <Switch>
            <Route exact path='/puser' component={PuserFragment} />
          </Switch>
          <Switch>
            <Route path='/iuser' exact component={IuserFragment} />
          </Switch>
          <Switch>
            <Route path='/bookings' component={BookingFragment} />
          </Switch>
          <Switch>
            <Route exact path='/landmark' component={LandMarkFragment} />
          </Switch>
          <Switch>
            <Route exact path='/approvedphotos' component={ApprovedPhotos} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
