import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    tabPanel: {
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
        height: "100%",
        cursor: "pointer",
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)"
        }
    },
    nav: {
        backgroundColor: "#000000",
        height: "85px",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.2rem calc((100vw - 1000px) / 2)",
        zIndex: "12"
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
                    // className={classes.nav}
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <StyledTab label={<p>About</p>} />
                    <StyledTab label="Events" />
                    <StyledTab label="Annual Report" />
                    <StyledTab label="Teams" />
                    <StyledTab label="Blogs" />
                    <StyledTab label="Sign Up" />
                </StyledTabs>
            </Box>
        </div>
    );
}
