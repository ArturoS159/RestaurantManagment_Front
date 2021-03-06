import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette:{
        primary: {
            main: '#243b55',
        },
        secondary: {
            main:'#e7b045',
            dark:'#E8C262',
            contrastText:"#fff"
        },
        text:{
            primary:'#243b55',
            secondary:'#3b3b3b',
            disabled:'#6C6C6C'
        },
        error:{
            main:"#ff0000",
        }

    },
    typography:{
        h3:{
            fontSize:'1.7rem',
            fontWeight:700,
            color:'var(--admin-first-color)',
            '@media (max-width:960px)': {
                fontSize: '1.4rem',
            },
        },
        h4:{
            fontSize:'1.2rem',
            fontWeight:700,
            color:'var(--admin-first-color)',
            '@media (max-width:960px)': {
                fontSize: '1.1rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1.0rem',
            },
        },
        h5:{
            fontSize:'1rem',
            fontWeight:500,
            lineHeight:'1.2rem',
            '@media (max-width:960px)': {
                fontSize: '0.9rem',
            },
        },
        subtitle2:{
            fontSize:'12px',
            color:'#6C6C6C',
            '@media (max-width:600px)': {
                fontSize: '10px',
            },
        },
        subtitle1:{
            fontSize:'10px',
        },
        h6:{
            '@media (max-width:600px)': {
                fontSize: '1.1rem',
            },
        },
        fontFamily: [
            'Montserrat',
        ].join(','),
    },
    overrides:{
        MuiButton:{
            root: {
                '&:focus': {
                    outline:'none'
                }
            }
        }
    }
});
export default theme;
