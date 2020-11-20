import React, {useEffect, useState} from "react";
import {
    Card,
    CardHeader,
    Typography,
    CardContent,
    Divider,
    Box,
    Grid,
    Avatar,
    Button,
    IconButton,
    AccordionDetails,
    AccordionSummary,
    Accordion
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getCuisineTypeValue, restaurantInitialValues} from "../../helpers/_helpers";
import {validationSchema} from "../../helpers/_validation";
import {Formik} from "formik";
import DeleteIcon from '@material-ui/icons/Delete';
import CropIcon from '@material-ui/icons/Crop';
import RestaurantContact from "../../components/Admin/AddRestaurant/RestaurantContact";
import RestaurantData from "../../components/Admin/AddRestaurant/RestaurantData";
import RestaurantOpeningHours from "../../components/Admin/AddRestaurant/RestaurantOpeningHours";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import AppLogo from "../../components/AppLogo";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme)=>({
    root:{
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        padding:theme.spacing(2),
        borderRadius:theme.spacing(2),
    },
    formStyle:{
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(1)
        },
        padding: theme.spacing(8)
    },
    avatar:{
        maxWidth:"100%",
        maxHeight:'100%',
        minHeight: "200px",
        minWidth:'200px',
        backgroundColor:'#fff',
        border: `1px solid ${theme.palette.text.disabled}`
    },
    responsiveTable:{
        overflowX:'auto',
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            width:'calc(100vw - 82px)',
        },
    },
    buttonStyle:{
        margin:`${theme.spacing(1)}px 0px`
    },
    addedImagePreview:{

        maxHeight:200,
        maxWidth:"100%",
    }
}))
const Edit = () =>{
    const classes = useStyles();
    const [isCollapseOpen, setCollapseOpen] = useState(false);
    const currentRestaurantData = useSelector(state=>state.restaurant.selectedRestaurant)
    useEffect(()=>{
        currentRestaurantData && Object.assign(restaurantInitialValues,currentRestaurantData,{category: getCuisineTypeValue(currentRestaurantData.category)});
    },[currentRestaurantData])

    const handleToggleCollapse = () =>{
        setCollapseOpen(!isCollapseOpen);
    }
    return(
        <>
            <Typography variant="h3">Edycja:</Typography>
            <Typography variant="subtitle2" paragraph >Zmień dane swojej restauracji!</Typography>
            <Formik
                initialValues={restaurantInitialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={(values) => {
                }}
            >
                {({
                      handleSubmit,
                      setFieldValue,
                      values,
                  }) => (
                    <form onSubmit={handleSubmit} className={classes.formStyle}>
                        <Grid container spacing={4} justify="center">
                            <Grid item xs={12} md={7} >
                                <Grid item xs="auto">
                                <Card className={classes.root}>
                                    <CardHeader
                                        title={
                                            <Typography
                                                className={"MuiTypography--heading"}
                                                variant={"h6"}
                                                gutterBottom
                                            >
                                                Dane restauracji
                                            </Typography>
                                        }

                                    />
                                    <Divider/>
                                    <CardContent>
                                        <RestaurantData/>
                                    </CardContent>
                                </Card>
                                </Grid>
                            <Box mt={4}/>
                                <Grid item xs="auto">
                                <Card className={classes.root}>
                                    <CardHeader
                                        title={
                                            <Typography
                                                className={"MuiTypography--heading"}
                                                variant={"h6"}
                                                gutterBottom
                                            >
                                                Godziny otwarcia
                                            </Typography>
                                        }

                                    />
                                    <Divider/>
                                    <CardContent className={classes.responsiveTable}>
                                        <RestaurantOpeningHours/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid item xs="auto">
                                        <Card className={classes.root} >
                                            <Box display="flex" alignItems = "center" justifyContent = "center">
                                                <Avatar variant="rounded" className={classes.avatar} src={values.image && URL.createObjectURL(values.image)}>
                                                    {!values.image && <AppLogo/> }
                                                </Avatar>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" alignItems = "center" mt={2}>
                                                <Box>
                                                    <IconButton
                                                        onClick={()=> setFieldValue("image",'')}
                                                        name="image"
                                                    >
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                    <IconButton>
                                                        <CropIcon/>
                                                    </IconButton>
                                                </Box>
                                                <div>
                                                    <input
                                                        accept="image/*"
                                                        style={{display:'none'}}
                                                        id="contained-button-file"
                                                        type="file"
                                                        onChange={e=> setFieldValue("image",e.target.files[0])}
                                                        name="image"
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="secondary" component="span" size="small">
                                                            {values.image ? "Zmień zdjęcie" : "Dodaj zdjęcie"}
                                                        </Button>
                                                    </label>
                                                </div>
                                            </Box>
                                        </Card>
                                    </Grid>
                                <Box mt={4} mb={4}>
                                <Grid item xs="auto">
                                    <Card className={classes.root} >
                                        <CardHeader
                                            title={
                                                <Typography
                                                    className={"MuiTypography--heading"}
                                                    variant={"h6"}
                                                    gutterBottom
                                                >
                                                    Dane kontaktowe
                                                </Typography>
                                            }
                                        />
                                        <Divider/>
                                    <CardContent>
                                        <RestaurantContact padding={null}/>
                                    </CardContent>
                                    </Card>
                                </Grid>
                                </Box>
                                <Box mt={"auto"}/>
                                <Grid item xs="auto">
                                    <Card className={classes.root} style={{padding:0}} >
                                        <Accordion square elevation={0} expanded={isCollapseOpen}>
                                            <AccordionSummary>

                                                <Box display="flex" justifyContent="space-evenly" alignItems = "space-between" flexWrap="wrap" width="100%">
                                                    <Button
                                                        variant = "contained"
                                                        color="primary"
                                                        startIcon={<DeleteIcon/>}
                                                        size="small"
                                                        className={classes.buttonStyle}
                                                        onClick={handleToggleCollapse}
                                                    >
                                                        Usuń restaurację
                                                    </Button>
                                                    <Button
                                                        variant = "contained"
                                                        color="secondary"
                                                        startIcon={<DoneIcon/>}
                                                        size="small"
                                                        className={classes.buttonStyle}
                                                    >
                                                        Zatwierdź zmiany
                                                    </Button>
                                                </Box>

                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box display="flex" alignItems="center" flexDirection="column" p={2} pt={0}>
                                                    <Typography paragraph>
                                                        Czy na pewno chcesz usunąć swoją restaurację?
                                                    </Typography>
                                                    <Typography variant = "subtitle2" gutterBottom>
                                                        Okres usuwania potrwa 30 dni, w tym czasie możesz anulować usuwanie.
                                                        Po upływie określonego czasu restauracja zostanie usunięta.
                                                    </Typography>
                                                    <Box mt={2}>
                                                        <Button
                                                            variant="text"
                                                            startIcon={<DoneIcon/>}

                                                        >
                                                            Usuń
                                                        </Button>
                                                        <Button
                                                            variant="text"
                                                            startIcon={<CloseIcon/>}
                                                            onClick={handleToggleCollapse}
                                                        >

                                                            Anuluj
                                                        </Button>
                                                    </Box>
                                                </Box>

                                            </AccordionDetails>
                                        </Accordion>
                                    </Card>

                                </Grid>
                            </Grid>
                        </Grid>


                    </form>
                )
                }
            </Formik>
        </>
    )
};
export default Edit;