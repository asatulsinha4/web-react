import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { items } from "../header_Items/Home";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    tabPanel: {
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
        height: "100%",
        cursor: "pointer",
    },
    nav: {
        backgroundColor: "#000000",
        height: "75px",
        maxWidth: '100%',
        display: "flex",
        justifyContent: "space-between",
        padding: "0.2rem calc((100vw - 1000px) / 2)",
        '-webkit-backdrop-filter': 'blur(10px)',
        backdropFilter: 'blur(10px)',
    }
});

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    "& .MuiTabs-indicatorSpan": {
        // maxWidth: 40,
        width: "100%",
        backgroundColor: "#ffffff"
    }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: "#a6a6a6",
        "&.Mui-selected": {
            color: "#ffffff"
        },
        "&.Mui-focusVisible": {
            backgroundColor: "#1bfa07"
        }
    })
);

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

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CustomizedTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box className={classes.nav}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    {items.map((props, i) => {
                        return (
                            <StyledTab label={<p>{props.name}</p>} component={Link} to={props.path} value={i} {...a11yProps(i)} />
                        );
                    })}
                </StyledTabs>
            </Box>
            {/* {items.map((props, i) => {
                return (
                    <TabPanel value={value} index={i}>
                        {props.name}
                    </TabPanel>
                )
            })} */}
        </div>
    );
}
