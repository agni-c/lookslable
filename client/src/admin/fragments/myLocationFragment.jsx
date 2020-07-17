// import React, { useContext } from 'react';
// import { MyLocationAdminContext } from '../../context/myLocationAdmin';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IuserAdminContext } from "../../context/iUserAdmin";
import MaterialTable from "material-table";
import { MyLocationAdminContext } from "../../context/myLocationAdmin";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { myLocationPhoto, myLocationVideo } from "../../api";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CenteredTabs() {
  const [state, setState] = useContext(MyLocationAdminContext);
  // const [state, setState] = useContext(IuserAdminContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const photodata = [];
  // const videodata = [];

  // {
  //   photodata.push(state.pdata);
  //   videodata.push(state.vdata);
  // }

  const PhotoTable = () => {
    {
      if (state.ploading === true) {
        return <CircularProgress />;
      } else {
        return (
          <MaterialTable
            title="Photo"
            columns={state.pcolumns}
            data={state.pdata}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const pdata = [...prevState.pdata];
                      pdata.push(newData);
                      return { ...prevState, pdata };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState((prevState) => {
                        const pdata = [...prevState.pdata];
                        // console.log(newData);
                        pdata[pdata.indexOf(oldData)] = newData;
                        myLocationPhoto(
                          newData.bfirst,
                          newData.bsecond,
                          newData.bthird,
                          newData.bprice,
                          newData.pfirst,
                          newData.psecond,
                          newData.pthird,
                          newData.pprice
                        );
                        return { ...prevState, pdata };
                      });
                    }
                    // console.log(state.data);
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const pdata = [...prevState.pdata];
                      pdata.splice(pdata.indexOf(oldData), 1);
                      return { ...prevState, pdata };
                    });
                  }, 600);
                }),
            }}
          />
        );
      }
    }
  };
  const VideoTable = () => {
    {
      if (state.vloading === true) {
        return <CircularProgress />;
      } else {
        return (
          <MaterialTable
            title="Video"
            columns={state.vcolumns}
            data={state.vdata}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const vdata = [...prevState.vdata];
                      vdata.push(newData);
                      return { ...prevState, vdata };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState((prevState) => {
                        const vdata = [...prevState.vdata];
                        vdata[vdata.indexOf(oldData)] = newData;
                        myLocationVideo(
                          newData.bfirst,
                          newData.bsecond,
                          newData.bthird,
                          newData.bprice,
                          newData.pfirst,
                          newData.psecond,
                          newData.pthird,
                          newData.pprice
                        );
                        return { ...prevState, vdata };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const vdata = [...prevState.vdata];
                      vdata.splice(vdata.indexOf(oldData), 1);
                      return { ...prevState, vdata };
                    });
                  }, 600);
                }),
            }}
          />
        );
      }
    }
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Photo" />
        <Tab label="Video" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PhotoTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VideoTable />
      </TabPanel>
    </>
    // </Paper>
  );
}
