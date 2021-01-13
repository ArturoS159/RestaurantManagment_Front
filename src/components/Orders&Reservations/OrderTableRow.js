import React, {useState} from 'react';
import {TableRow,TableCell,IconButton,Collapse,Box,Typography,Table,TableHead,TableBody,Divider,Chip,Grid} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PhoneIcon from '@material-ui/icons/Phone';
import moment from 'moment';
import {orderStatusTypeTranslate, paymentTypeTranslate, orderTypeTranslate, isValidUrl} from "../../helpers/_helpers";
import AppLogo from "../AppLogo";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    typographyHidden:{
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        width: "150px",
        display: "block",
        overflow: "hidden"
    }
}))

const OrderTableRow = ({row}) =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow hover onClick={() => setOpen(!open)}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" >
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Typography variant="body2">
                        {moment(row.time).format("DD-MM-YYYY")}
                    </Typography>
                    <Typography variant="subtitle2">
                        {moment(row.time).format("HH:mm")}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Chip label= {orderStatusTypeTranslate(row.orderStatus)} variant="outlined" color="primary"/>
                </TableCell>
                <TableCell>{orderTypeTranslate(row.orderType)}</TableCell>
                <TableCell>
                    <Typography className={classes.typographyHidden}>
                        {row.meals.map(meal=>meal.name).join(", ")}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="body2" style={{fontWeight:500}}>{row.price.toFixed(2)} zł</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h5" gutterBottom component="div">
                                Zamówienie
                            </Typography>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Nazwa</TableCell>
                                        <TableCell>Składniki</TableCell>
                                        <TableCell align="right">Ilość</TableCell>
                                        <TableCell align="right">Cena jednostkowa</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.meals.map((meal) => (
                                        <TableRow key={meal.id}>
                                            <TableCell component="th" scope="row">
                                                {isValidUrl(meal.image) ? (
                                                        <img src={meal.image} alt="image" style={{width:60,height:60}}/>
                                                    ) : (
                                                        <AppLogo size={10}/>
                                                    )
                                                }
                                            </TableCell>
                                            <TableCell>{meal.name}</TableCell>
                                            <TableCell><Typography variant="body2" className={classes.typographyHidden}>{meal.ingredients}</Typography></TableCell>
                                            <TableCell align="right">x{meal.quantity}</TableCell>
                                            <TableCell align="right">{meal.price}zł</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Divider/>
                            <Box p={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs = {12} md = {8}>
                                        <Typography variant="h5" gutterBottom>
                                            Płatność:
                                        </Typography>
                                        <Typography variant="body2" display="inline" paragraph style={{marginRight:16}}>{paymentTypeTranslate(row.paymentMethod)}</Typography>
                                        <Chip label={row.payed ? "Zapłacono" : "Do zapłaty!"} color= "secondary"/>
                                        <Box mb={2}/>

                                        <Typography variant="h5" gutterBottom>
                                            Komentarz:
                                        </Typography>
                                        <Typography variant="subtitle2">{row.comment ? row.comment : "Brak"}</Typography>
                                    </Grid>
                                    <Grid item xs = {12} md = {4}>
                                        <Box>
                                            <Typography variant="body2">{row.forename}  {row.surname}</Typography>
                                            <Typography variant="body2">{row.postCode} {row.city}</Typography>
                                            <Typography variant="body2" gutterBottom>ul. {row.street} {row.houseNumber}</Typography>
                                            <Box display="flex" alignItems="center">
                                                <Box mr={1}>
                                                    <PhoneIcon color="secondary"/>
                                                </Box>
                                                <Typography variant="body2">{row.phoneNumber}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>

                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
export default OrderTableRow;