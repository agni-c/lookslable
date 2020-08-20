import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Badge, CircularProgress } from '@material-ui/core';
import { LocationDataContext } from '../../../context/Iuser/locationData';
import { useState } from 'react';
import Check from '../../../assets/checkmark.png';

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
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

const VideoPlan = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [state, setState] = useContext(LocationDataContext);
  const [key1, setKey1] = useState('');
  //   const locationData = state.data;

  const handleChange = (event, newValue) => {
    props.keyHandler(newValue);
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  console.log(props);
  //   log

  return (
    <div className={classes.root} style={{ backgroundColor: '#222831' }}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
          // style={{ width: '500px' }}
        >
          <Tab label='Basic' {...a11yProps(0)} />
          <Tab label='Premium' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {state.loading ? (
            <CircularProgress />
          ) : (
            <>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  // margin: '0 auto',
                }}
              >
                {/* <h1>Video Basic</h1> */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <img
                      src={Check}
                      alt='plan'
                      style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '50px',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '50px',
                      }}
                    >
                      <h4
                        style={{
                          // textAlign: 'center',
                          color: '#ed3181',
                        }}
                      >
                        {state.data.Photo.bfirst}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={Check}
                      alt='plan'
                      style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '50px',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '50px',
                      }}
                    >
                      <h4
                        style={{
                          // textAlign: 'center',
                          color: '#ed3181',
                        }}
                      >
                        {state.data.Photo.bsecond}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={Check}
                      alt='plan'
                      style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '50px',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '50px',
                      }}
                    >
                      <h4
                        style={{
                          // textAlign: 'center',
                          color: '#ed3181',
                        }}
                      >
                        {state.data.Photo.bthird}
                      </h4>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      // marginLeft: '50px',
                    }}
                  >
                    <h3
                      style={{
                        textAlign: 'center',
                        color: '#ed3181',
                      }}
                    >
                      Price :{state.data.Photo.bprice}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {state.loading ? (
            <CircularProgress />
          ) : (
            <>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  // margin: '0 auto',
                }}
              >
                {/* <h1>Video Basic</h1> */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <img
                      src={Check}
                      alt='plan'
                      style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '50px',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '50px',
                      }}
                    >
                      <h4
                        style={{
                          // textAlign: 'center',
                          color: '#ed3181',
                        }}
                      >
                        {state.data.Photo.pfirst}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={Check}
                      alt='plan'
                      style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '50px',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '50px',
                      }}
                    >
                      <h4
                        style={{
                          // textAlign: 'center',
                          color: '#ed3181',
                        }}
                      >
                        {state.data.Photo.psecond}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={Check}
                      alt='plan'
                      style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '50px',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '50px',
                      }}
                    >
                      <h4
                        style={{
                          // textAlign: 'center',
                          color: '#ed3181',
                        }}
                      >
                        {state.data.Photo.pthird}
                      </h4>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      // marginLeft: '50px',
                    }}
                  >
                    <h3
                      style={{
                        textAlign: 'center',
                        color: '#ed3181',
                      }}
                    >
                      Price :{state.data.Photo.pprice}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default VideoPlan;
