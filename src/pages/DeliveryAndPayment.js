import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Typography, useTheme,Paper,Button,CircularProgress} from "@material-ui/core";
import Navbar from "../components/Navbar";
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import ShoppingBasketItemWrapper from "../components/Restaurants/ShoppingBasket/ShoppingBasketItemWrapper";
import ShoppingBasketItem from "../components/Restaurants/ShoppingBasket/ShoppingBasketItem";
import {useDispatch, useSelector} from "react-redux";
import {countMinTimeToPrepare, history, personalDataInitialValues, renderBastekProducts} from "../helpers/_helpers";
import {routes} from "../config/routes";
import PersonalDataForm from "../components/PersonalDataForm";
import clsx from "clsx";
import DeliveryAndPaymentWrapper from "../components/Restaurants/DeliveryAndPaymentWrapper";
import {getOrdersToPayment, getPersonalDataToPayment, submitOrder} from "../redux/actions/payment";
import ProgressButton from "../components/ProgressButton";

const useStyles = makeStyles(theme=>({
    pageBackground:{
        backgroundColor:'rgba(248,248,248)',
        minHeight:'100vh',
    },
    paperStyle:{
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.1)",
        borderRadius: theme.spacing(2),
        overflow: 'hidden',
        padding:theme.spacing(3),
        marginBottom:theme.spacing(2),
        [theme.breakpoints.down('xs')]:{
            padding:theme.spacing(2),
            marginBottom:theme.spacing(1),
        }
    },
    sticky:{
        position:'sticky',
        top:30,
    }

}));

const DeliveryAndPayment = () =>{
    const classes = useStyles();
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    const userData = useSelector(state=>state.auth.userData);
    const isLoading = useSelector(state=>state.auth.isLoading);
    const dispatch = useDispatch();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const basket = useSelector(state=>state.basket);
    const [updatePersonalData,setUpdatePersonalData] = useState(false);
    const order = useSelector(state=>state.payment);
    const isRequesting = useSelector(state=>state.payment.isRequesting)


    useEffect(()=>{
        dispatch(getPersonalDataToPayment(userData));
        dispatch(getOrdersToPayment(basket.basket));
    },[userData,basket.basket,dispatch])

    const handleToggleUpdatePersonalData = () =>{
        setUpdatePersonalData(!updatePersonalData);
    }



    return(
        <Box className={classes.pageBackground}>
            <Navbar/>
            <Container>
                <Box mt={smDown ? 2 : 5} mb={smDown ? 2 : 5}>
                    <Typography variant="h3">Dostawa i płatność </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item md = {8} sm={12} xs={12}>
                        <Paper className={classes.paperStyle} variant="outlined">
                            <Typography variant="h4" paragraph>Dane odbiorcy</Typography>
                            {isLoading || !Object.keys(userData).length > 0 ? (
                                <Box display="flex" justifyContent= "center" p={2}>
                                    <CircularProgress color="secondary"/>
                                </Box>
                            ):(
                                isLoggedIn || Object.values(userData).length ? (
                                    Object.values(userData).every(x => (x !== null)) ? (
                                            updatePersonalData ? (
                                                    <Box p={2} >
                                                        <Typography variant="h5" paragraph> Zmień dane do wysyłki</Typography>
                                                        <PersonalDataForm initial={userData} update={isLoggedIn} showUpdate={isLoggedIn} handleClose={handleToggleUpdatePersonalData}/>
                                                    </Box>
                                                ):(
                                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                                        <Box>
                                                            <Typography variant="body2">{userData.forename} {userData.surname}</Typography>
                                                            <Typography variant="body2">{userData.street} {userData.houseNumber}</Typography>
                                                            <Typography variant="body2">{userData.postCode} {userData.city}</Typography>
                                                            <Typography variant="body2" paragraph>{userData.phoneNumber}</Typography>
                                                            <Button variant = "contained" color="secondary" onClick={handleToggleUpdatePersonalData}> Zmień adres </Button>
                                                        </Box>
                                                    </Box>
                                                )
                                        ):(
                                            <Box p={2} >
                                                <Typography variant="h5" paragraph> Uzupełnij swoje dane</Typography>
                                                <PersonalDataForm initial={personalDataInitialValues} update  showUpdate/>
                                            </Box>
                                    )
                                ):(
                                    <>
                                        <Box p={2} mb={2}>
                                            <Typography variant="h5"> Zamów bez logowania</Typography>
                                            <Typography variant="subtitle1" paragraph>Uzupełnij formularz dostawy</Typography>
                                            <PersonalDataForm initial={personalDataInitialValues} />
                                        </Box>
                                        <Typography variant="h5" align="center"> lub </Typography>
                                        <Box mt={4}/>
                                        <Button variant="contained" color="secondary" fullWidth onClick={()=>history.push({pathname:routes.LOGIN, from:routes.DELIVERYANDPAYMENT})}>Zaloguj się</Button>
                                    </>

                                )
                            )}
                        </Paper>
                        <Paper className={classes.paperStyle} variant="outlined">
                            <Typography variant="h4" paragraph>Produkty i dostawa</Typography>
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
                                        />
                                    ))}
                                    <DeliveryAndPaymentWrapper paymentOnline={restaurant.paymentOnline} restaurantId={restaurant.restaurantId}/>
                                </ShoppingBasketItemWrapper>
                            ))}
                        </Paper>
                    </Grid>
                    <Grid item md = {4} sm = {12} xs={12}>
                        <Paper className={clsx(classes.paperStyle,classes.sticky)} variant="outlined">
                            <Typography variant="h4" paragraph> Podsumowanie:</Typography>
                            <Box display="flex" justifyContent = "space-between" mb={3}>
                                <Box pt={1}>
                                    <Typography variant="body2" gutterBottom> Całkowity koszt:</Typography>
                                    <Typography variant="subtitle2" paragraph> W tym dostawa:</Typography>
                                    <Typography variant="subtitle2"> Minimalny czas przygotowania:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h3" align="right"> {basket.totalPrice.toFixed(2)} zł </Typography>
                                    <Typography variant = "subtitle2"align="right"paragraph> 0.00 zł </Typography>
                                    <Typography variant = "subtitle2"align="right"> {countMinTimeToPrepare(basket.basket)} min </Typography>
                                </Box>
                            </Box>
                            <Box mt={5}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                    onClick={()=>history.push(routes.SHOPPINGBASKET)}
                                >
                                    Wróć do koszyka
                                </Button>
                            </Box>
                            <Box mt={1} mb={1}>
                                <ProgressButton
                                    variant="contained"
                                    color="secondary"
                                    label="Kupuję i płacę"
                                    loading={isRequesting}
                                    onClick={()=>dispatch(submitOrder(order))}
                                />
                            </Box>
                            <Typography variant="subtitle2">Klikając ten przycisk potwierdzasz zakup.</Typography>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default DeliveryAndPayment;
