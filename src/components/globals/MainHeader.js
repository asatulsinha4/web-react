import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { items } from "../header_Items/Home";

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
        width: "100%",
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
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    {items.map((props) => {
                         return <StyledTab label={<p>{props.name}</p>} />
                    })}
                </StyledTabs>
            </Box>
        </div>
    );
}
