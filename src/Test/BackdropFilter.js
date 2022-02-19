import React from 'react';
import { makeStyles } from '@mui/styles';
import image from '../assets/bckImage.jpg';

const useStyles = makeStyles({
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
        // opacity: 0.3
    },

    body: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        // position: 'fixed',
        left: 0,
        right: 0,
        display: "block",
        backgroundAttachment: 'fixed'
    },

    container: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    }

})

export default function BackdropFilter() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
        <div className={classes.container}>
            <div className={classes.box}>
                <p>Some random text</p>
            </div>
        </div>
        </div>
    )
}
