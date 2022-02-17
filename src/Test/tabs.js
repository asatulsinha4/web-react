import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material";

const useStyles = makeStyles({
  tabPanel: {
    color: '#ffffff',
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    height: "100%",
    cursor: "pointer",
    // fontFamily: 'roboto',
    "&.active": {
      color: "#19fa05",
      // backgroundColor: "#ffffff"
      // borderBottom: "2px solid"
    },
    '&:hover': {
      color: '#ffffff'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  },
  nav: {
    backgroundColor: "#000000",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    padding: "0.2rem calc((100vw - 1000px) / 2)",
    zIndex: "12"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Box sx={{ width: '100%' }}> */}
      <div>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#000000', marginTop: 0 }}> */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className={classes.nav}
        >
          <Tab label={<p className={classes.tabPanel}>Item one</p>} {...a11yProps(0)} disableRipple />
          <Tab label={<p className={classes.tabPanel}>Item two</p>} {...a11yProps(1)} disableRipple />
          <Tab label={<p className={classes.tabPanel}>Item three</p>} {...a11yProps(2)} disableRipple />
        </Tabs>
      </div>
      {/* </Box> */}
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
      {/* </Box> */}
    </>
  );
}
