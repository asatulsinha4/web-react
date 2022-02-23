import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        background: `linear-gradient(45deg, rgba(0,0,255,1), rgba(255,0,0, 1))`,
        // backgroundColor: 'rgba(33, 118, 236, 0.2)',
        alignItems: 'center',
        display: 'flex',
        position: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '90vh',
        width: '100%',
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '5px',
        textAlign: 'center',
        lineHeight: 1,
        '-webkit-backdrop-filter': 'blur(10px)',
        backdropFilter: 'blur(10px)',
        maxWidth: '50%',
        maxHeight: '50%',
        padding: '20px 40px',
    }
})

export default function Page404() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <h1>Error 404!</h1>
                <h2>Page does not exist</h2>
            </div>
        </div>
    )
}
