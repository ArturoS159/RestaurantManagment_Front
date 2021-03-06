import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Grid, Hidden, Paper, useTheme, Typography, CircularProgress, Slide, Grow} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MenuFilters from "../components/Restaurants/MenuFilters";
import MenuCard from "../components/Restaurants/MenuCard";
import Search from "../components/Search";
import ShortTextIcon from '@material-ui/icons/ShortText';
import MobileFiltersDialog from "../components/Restaurants/MobileFiltersDialog";
import Jumbotron from "../components/Jumbotron";
import LayersClearIcon from '@material-ui/icons/LayersClear';
import queryString from "query-string";
import {handleRenderMenuByCategory, history} from "../helpers/_helpers";
import {routes} from "../config/routes";
import {mealsService} from "../services/mealsService";
import {restaurantService} from "../services/restaurantService";

const useStyles = makeStyles((theme)=>({
    filtersBoxStyle:{
        [theme.breakpoints.down('md')]: {
            display :"flex" ,
            justifyContent :"space-between",
            alignItems :"center" ,
        },
    },
    filtersPaperStyle:{
        padding:theme.spacing(1),
        borderRadius:theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding:theme.spacing(1),
        },
        marginBottom:theme.spacing(3),
    },
    categoryPaperStyle:{
        padding:`${theme.spacing(1)}px ${theme.spacing(2)}px` ,
        borderRadius:theme.spacing(2),
        margin:`${theme.spacing(3)}px 0`,
        backgroundColor:theme.palette.secondary.dark,
    }
}));
const SingleRestaurantMenu = ({restaurant,location,match}) =>{
    const classes = useStyles();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const [meals,setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [menuCategory,setMenuCategory] = useState([]);
    const [isToggleFiltersDialogOpen, setToggleFiltersDialogOpen] = useState(false);
    const [query,setQuery] = useState({})

    useEffect(()=>{

        const queryStr = queryString.parse(location.search);
        if (Object.keys(queryStr).length !== 0) {
            setQuery(queryStr);
        }
        setIsLoading(true);
        restaurant.id &&
            mealsService.getMeals(restaurant.id,queryString.parse(location.search))
                .then(response=>{
                    setMeals(response.data.meals)
                    setIsLoading(false);
                })
                .catch(err=>{
                    console.log(err)
                    setIsLoading(false);
                })
    },[restaurant,location.search])

    useEffect(()=>{
        const getCategories = () =>{
            restaurantService.getMenuCatogory(match.params.restaurantId)
                .then((response)=>setMenuCategory(response.data.category))
                .catch(()=>setMenuCategory([]))
        }
        getCategories();
    },[match.params.restaurantId]);


    const handleToggleFiltersDialog = () =>{
        setToggleFiltersDialogOpen(!isToggleFiltersDialogOpen);
    }

    const handleWriteMeal=(value)=>{
        if(value.length){
            setQuery({...query, name:value})
            pushToHistory({...query, name:value})
        }else if(query.name){
            const newQuery = {...query};
            delete newQuery.name;
            setQuery(newQuery);
            pushToHistory(newQuery)
        }
    }
    const handleChangeFilters = (category,fromPrice,toPrice,fromTime,toTime)=>{
        const newObject = {};
        if(category){
            newObject.category = category;
        }
        if(fromPrice){
            newObject.fromPrice = fromPrice;
        }
        if(toPrice){
            newObject.toPrice = toPrice;
        }
        if(fromTime){
            newObject.fromTime = fromTime;
        }
        if(toTime){
            newObject.toTime = toTime;
        }
        setQuery(newObject);
        pushToHistory(newObject);
        isToggleFiltersDialogOpen && handleToggleFiltersDialog();
    }
    const pushToHistory =(query)=>{
        const newQuery = queryString.stringify(query);
        history.push({
            pathname:`${routes.SINGLERESTAURANTMENU}/${restaurant.id}`,
            search:newQuery,
        })
    }
    return(
        <>
           <Box mt={mdDown ? 5 : 10}/>
           <Grid container spacing={3}>
               <Grid item md = {3} >
                   <Hidden mdDown>
                       <Slide in={true} timeout={500} direction="right">
                           <Box style={{position:'sticky' ,top: 30}}>
                               <MenuFilters handleChangeFilters={handleChangeFilters} query={query} categories={menuCategory}/>
                           </Box>
                       </Slide>
                   </Hidden>
               </Grid>
               <Grid item md = {mdDown ? 12 : 9} xs={12}>
                   <Slide in={true} timeout={500} direction="left">
                       <Paper className={classes.filtersPaperStyle} variant="outlined">
                           <Box className={classes.filtersBoxStyle}>
                               <Search width={'100%'} handleBlur={(e)=> handleWriteMeal(e.target.value)}/>
                               <Box display="flex"  width="100%" justifyContent="flex-end" flex="2" ml={1}>
                                   <Hidden lgUp>
                                       <Box mr={1}>
                                           <Button variant="contained" color="secondary" size="small" startIcon={<ShortTextIcon/>} onClick={handleToggleFiltersDialog}>
                                               Filtry
                                           </Button>
                                       </Box>
                                   </Hidden>
                               </Box>
                           </Box>
                       </Paper>
                   </Slide>
                   <Box position='relative' minHeight="70vh">
                           {
                               isLoading ? (
                                   <Box display="flex" alignItems="center" justifyContent="center" minHeight="100%">
                                       <CircularProgress color="secondary"/>
                                   </Box>
                               ):(
                                   meals && meals.length ? (
                                       Object.entries(handleRenderMenuByCategory(meals)).map((category,i) => (
                                           <Box key={i}>
                                           <Paper className={classes.categoryPaperStyle} variant="outlined" >
                                               <Typography variant="h4">{category[0] !== "null" ? category[0] : "Inne" }</Typography>
                                           </Paper>
                                           {category[1].map(meal=>(
                                               <MenuCard {...meal} restaurantName={restaurant.name} restaurantId={restaurant.id} key={meal.id} payment={restaurant.paymentOnline}/>
                                           ))}
                                           </Box>
                                       ))

                                ):(
                                       <Grow in={true} timeout={500}>
                                            <Jumbotron size={40} text="Brak posiłków" icon={<LayersClearIcon fontSize="inherit"/> }/>
                                       </Grow>
                                   )
                               )
                           }
                   </Box>
               </Grid>
           </Grid>
            <MobileFiltersDialog
                isToggleFiltersDialogOpen={isToggleFiltersDialogOpen}
                handleToggleFiltersDialog={handleToggleFiltersDialog}
            >
                <MenuFilters
                    categories={menuCategory}
                    handleChangeFilters={handleChangeFilters}
                    query={query}
                />
            </MobileFiltersDialog>
        </>
    )
}
export default SingleRestaurantMenu;
