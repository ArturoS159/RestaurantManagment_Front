import React from 'react';
import {Box, Divider, Typography} from "@material-ui/core";
import AppLogo from "../../AppLogo";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    cartPaperStyle: {
        height: 100,
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        marginTop:theme.spacing(1),
    },
    cardMedia: {
        display: 'flex',
        backgroundColor: '#ededed',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
    cartPaperContentStyle: {
        display: "flex",
        alignItems:'center',
        justifyContent:'space-between',
        padding: theme.spacing(1),
        width: 300,
    },
}))
const AppBarShoppingCartItem =({product, amount, price})=>{
    const classes = useStyles();
    return(
        <Box className={classes.cartPaperStyle}>
            <Box display ="flex"  height="100%" >
                <Box className={classes.cardMedia}>
                    <AppLogo size={8}/>
                </Box>
                <Divider orientation='vertical'/>
                <Box className={classes.cartPaperContentStyle}>
                    <Box flex="1">
                        <Typography variant="body2" color="primary"> {product}</Typography>
                    </Box>
                    <Divider orientation="vertical"/>
                    <Box ml = {1} minWidth="70px">
                        <Typography variant="body2"> x{amount}</Typography>
                        <Typography variant="h6"> {price} zł</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default AppBarShoppingCartItem;
