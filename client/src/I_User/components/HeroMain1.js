import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Gallery from './Gallery';
import Forms from './Form/form';
import { LocationDataProvider } from '../../context/Iuser/locationData';
import { postIuserProfile } from '../../api';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ED3181',
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#222831',
  },
}));

export default function HeroMain() {
  const classes = useStyles();
  //   const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    (() => {
      postIuserProfile();
    })();
  });

  return (
    <MuiThemeProvider theme={theme}>
      {/* <LocationDataProvider> */}
      <div className={classes.root} style={{ width: '100%', height: '100%' }}>
        <AppBar position='static' color='default'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            aria-label='full width tabs example'
            style={{
              backgroundColor: '##222831',
              //   height: '60px',
              // margin: ' auto',
            }}
          >
            <Tab label='My Location' {...a11yProps(0)} />
            <Tab label='popular' {...a11yProps(1)} />
            {/* <Tab label='Item Three' {...a11yProps(2)} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Forms />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Gallery />
          </TabPanel>
        </SwipeableViews>
      </div>
      {/* </LocationDataProvider> */}
    </MuiThemeProvider>
  );
}
