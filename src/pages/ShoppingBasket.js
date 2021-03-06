import React from 'react';
import Navbar from "../components/Navbar";
import {Box, Container, Grid, useTheme, Paper,Typography,Button} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import {makeStyles} from "@material-ui/core/styles";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ShoppingBasketItemWrapper from "../components/Restaurants/ShoppingBasket/ShoppingBasketItemWrapper";
import ShoppingBasketItem from "../components/Restaurants/ShoppingBasket/ShoppingBasketItem";
import {countMinTimeToPrepare, history, renderBastekProducts} from "../helpers/_helpers";
import {routes} from "../config/routes";
import Jumbotron from "../components/Jumbotron";
import {useDispatch, useSelector} from "react-redux";
import {decrementProduct, deleteProduct, incrementProduct} from "../redux/actions/basket";

const useStyles = makeStyles(theme=>({
    pageBackground:{
        backgroundColor:'rgba(248,248,248)',
        minHeight:'100vh',
    },
    confirmPaper:{
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.1)",
        borderRadius: theme.spacing(2),
        overflow: 'hidden',
        padding:theme.spacing(3),
        position: 'sticky',
        top:30,
    }

}));

const ShoppingBasket = () =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const basket = useSelector(state=>state.basket);

    const handleDeleteProduct = (productId) =>{
        dispatch(deleteProduct(productId));
    }
    const handleIncrementProduct = (productId) =>{
        dispatch(incrementProduct(productId));
    }
    const handleDecrementProduct = (productId) =>{
        dispatch(decrementProduct(productId));
    }

    return (
        <Box className={classes.pageBackground}>
            <Navbar/>
            <Container>
                <Box mt={smDown ? 2 : 5} mb={smDown ? 2 : 5}>
                    <Typography variant="h3">Twój koszyk</Typography>
                </Box>
                {basket.basket.length ?
                    (
                        <Grid container spacing={3}>
                            <Grid item md = {8} sm={12} xs={12}>
                                {renderBastekProducts(basket.basket).map(restaurant=>(
                                    <ShoppingBasketItemWrapper
                                        restaurantName={restaurant.restaurantName}
                                        restaurantId={restaurant.restaurantId}
                                        key={restaurant.restaurantId}
                                    >
                                        {restaurant.products.map(product=>(
                                            <ShoppingBasketItem
                                                key={product.id}
                                                name={product.name}
                                                unitPrice={product.unitPrice}
                                                totalPrice={product.totalPrice}
                                                amount={product.amount}
                                                image={product.image}
                                                id={product.id}
                                                handleDeleteProduct={handleDeleteProduct}
                                                handleIncrementProduct={handleIncrementProduct}
                                                handleDecrementProduct={handleDecrementProduct}
                                            />
                                        ))}
                                    </ShoppingBasketItemWrapper>
                                ))}

                            </Grid>
                            <Grid item md = {4} sm = {12} xs={12}>
                                <Paper className={classes.confirmPaper} variant="outlined">
                                    <Box display="flex" justifyContent = "space-between" mb={3}>
                                        <Box display="flex" flexDirection="column" justifyContent="space-between" pt={1}>
                                            <Typography variant="subtitle2" paragraph> Całkowity koszt:</Typography>
                                            <Typography variant="subtitle2"> Minimalny czas przygotowania: </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h3" align="right"> {basket.totalPrice.toFixed(2)} zł </Typography>
                                            <Typography variant = "subtitle1"align="right" paragraph> + dostawa </Typography>
                                            <Typography variant = "subtitle2" align="right"> {countMinTimeToPrepare(basket.basket)} min </Typography>
                                        </Box>
                                    </Box>
                                    <Box m={3}/>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        onClick={()=>history.push(routes.DELIVERYANDPAYMENT)}
                                    >
                                        Dostawa i płatność
                                    </Button>
                                    <Box m={2}/>
                                    <Button
                                        variant = "text"
                                        color="inherit"
                                        fullWidth
                                        onClick={()=>history.push(routes.RESTAURANTS)}
                                    >
                                        Kontynuuj zakupy
                                    </Button>

                                </Paper>
                            </Grid>
                        </Grid>
                    ):(
                        <Box position="relative" height="70vh">
                            <Jumbotron
                                text="Twój koszyk jest pusty!"
                                handleClick={()=>history.push(routes.RESTAURANTS)}
                                buttonText="Przejdź do restauracji"
                                icon={<RemoveShoppingCartIcon fontSize="inherit"/>}
                            />
                        </Box>
                    )
                }

            </Container>
        </Box>
    )
}
export default ShoppingBasket;
