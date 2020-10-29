import React from 'react';
import {Typography, Box, Paper, TextField, Button} from '@material-ui/core';
import {makeStyles,useTheme} from "@material-ui/core/styles";
import authImage from '../images/cheeseburger-34314_1280.png';
import Hidden from "@material-ui/core/Hidden";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme=>({
    authBackground:{
        position:'absolute',
        top:0,
        right:0,
    },
    paperStyle:{
        overflow:'hidden',
        minHeight:theme.breakpoints.width('sm') + 220,
        width: theme.breakpoints.width('lg') + 100
    },
    logoText:{
        fontSize:28,
        fontWeight:700,
        letterSpacing: '0.085rem',

    }
}));

const AuthContainer = ({title, children, error, personalData}) =>{
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    return(
        <>
            <Hidden mdDown >
            <Box height="100vh" display="flex" alignItems = "center" justifyContent = "center" width="100%" style={{background:"#F6F6F6"}}>
                <Paper elevation={3} className={classes.paperStyle}>
                    <Box display = "flex" height="100%" minHeight={theme.breakpoints.width('sm') + 190}>
                        <Box width="40%" display="flex" alignItems = "center" justifyContent = "center" pl={7} pt={7} pb={7}>
                            {personalData ?
                                <svg id="e7d24159-a105-4c62-98a5-787fb4a09ca9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1061.97998 562.10004"><title>personal_info</title><polygon points="1061.98 100.16 1061.98 218.47 1059.98 215.49 916.49 2 915.14 0 994.66 0 996 2 1059.98 97.18 1061.98 100.16" fill={theme.palette.secondary.main}/><path d="M629.15,168.95A558.42252,558.42252,0,0,0,233.07,333.01q-13.36506,13.365-25.7,27.47a556.1246,556.1246,0,0,0-46.51,61.05q-6.09,9.255-11.8,18.75a560.14134,560.14134,0,0,0-36.03,70.78q-1.695,3.99-3.31006,8.01-8.985,22.155-15.99,44.89a554.27448,554.27448,0,0,0-22.9,119.48q-1.815,22.665-1.82,45.65v1H1130.99V168.95Zm499.84,559.14H71.01q.03-20.4,1.52-40.43A554.15464,554.15464,0,0,1,94.99,567.08q6.99-23.01,15.88-45.15a555.155,555.155,0,0,1,39.25-79.02q5.685-9.525,11.79-18.8A558.6761,558.6761,0,0,1,208.33,362.83c102.4-117.5,253.09-191.88,420.82-191.88h499.84Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><path d="M564.60263,649.81336c13.487,40.58989,8.75034,78.70124,8.75034,78.70124s-26.60336-27.69787-40.09034-68.28776-8.75035-78.70124-8.75035-78.70124S551.11564,609.22347,564.60263,649.81336Z" transform="translate(-69.01001 -168.94998)" fill={theme.palette.secondary.main}/><path d="M582.10332,649.81336c-13.487,40.58989-8.75035,78.70124-8.75035,78.70124s26.60336-27.69787,40.09035-68.28776,8.75034-78.70124,8.75034-78.70124S595.5903,609.22347,582.10332,649.81336Z" transform="translate(-69.01001 -168.94998)" fill={theme.palette.secondary.main}/><path d="M587.53537,650.25229c.904,42.76237-14.87181,77.77714-14.87181,77.77714S555.422,693.71268,554.518,650.9503s14.87181-77.77714,14.87181-77.77714S586.63134,607.48991,587.53537,650.25229Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><ellipse cx="503.64464" cy="559.56188" rx="38.14129" ry="2.09312" fill="#3f3d56"/><circle cx="140.00985" cy="538.57151" r="21.64124" fill="#f2f2f2"/><path d="M212.99,672.51a29.30044,29.30044,0,0,0-29.26,29.27c0,.16,0,.32.01.48a29.3294,29.3294,0,0,0,16.44,25.83,28.32982,28.32982,0,0,0,5.37,2,29.3482,29.3482,0,0,0,14.89,0,28.32982,28.32982,0,0,0,5.37-2,29.26809,29.26809,0,0,0-12.82-55.58Zm7.16,55.58a26.84072,26.84072,0,0,1-7.16.96c-.48,0-.96-.01-1.43-.04h-.01a26.28314,26.28314,0,0,1-5.71-.92,27.35859,27.35859,0,0,1-17.85-15.45V712.63a27.26025,27.26025,0,1,1,32.16,15.46Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><rect x="227.98999" y="391.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="122.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="185.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="246.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="307.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="370.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="433.52368" width="162" height="28.76636" fill="#f2f2f2"/><path d="M296,550.24v40H512v-40Zm214,38H298v-36H510Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><circle cx="586.98999" cy="156.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="218.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="280.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="342.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="404.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="466.29004" r="10" fill="#3f3d56"/><rect x="676.98999" y="155.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="217.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="279.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="341.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="403.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="465.29004" width="274" height="2" fill="#3f3d56"/><path d="M1069.36035,692.1658l-26.28613-21.56543,21.56543-26.28613,26.28613,21.56543ZM1045.88867,670.323l23.19434,19.02832,19.02832-23.19434L1064.917,647.12869Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><rect x="650" y="208.24002" width="32" height="32" transform="translate(224.31797 -540.49109) rotate(39.36505)" fill={theme.palette.secondary.main}/><path d="M537,387.24a132.32634,132.32634,0,0,1-25.6,78.44c-1.9,2.6-3.89,5.14-5.9801,7.59A133.41511,133.41511,0,0,1,485.72,492.17c-.72.56-1.45,1.12-2.18994,1.67q-4.04993,3.03-8.33008,5.75c-.86987.55-1.74,1.09-2.61987,1.61q-2.985,1.815-6.08008,3.46c-1.01.54-2.03,1.07-3.05,1.58a133.0906,133.0906,0,0,1-133.1499-8.29c-1.04-.68-2.06006-1.38-3.07007-2.1-1.8999-1.34-3.77-2.74-5.59-4.18-1.68-1.32-3.31994-2.69-4.93-4.09a133.16764,133.16764,0,0,1-22.35-25.04q-1.86-2.715-3.6-5.52A133.0056,133.0056,0,1,1,537,387.24Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><circle cx="329.98124" cy="175.49358" r="36.23421" fill="#a0616a"/><path d="M374.08024,361.80578s12.07806,27.17566-4.52928,37.744,27.17565,54.35131,27.17565,54.35131l48.31228-51.33179s-25.6659-16.60735-21.13662-43.783Z" transform="translate(-69.01001 -168.94998)" fill="#a0616a"/><path d="M485.72,492.17c-.72.56-1.45,1.12-2.18994,1.67q-4.04993,3.03-8.33008,5.75c-.86987.55-1.74,1.09-2.61987,1.61l-.37012-2.01,3.48-1.81Z" transform="translate(-69.01001 -168.94998)" fill="#a0616a"/><path d="M472.58,501.2c.88-.52,1.75-1.06,2.62-1.61l.03-.4.46-1.81,19.17-75.18-58.11-26.74-33.98,20.7-30.44-18.77s-17.88.65-22.41,5.18c-3.55,3.55-20.96,11.72-28.36,15.1-2.06.94-3.34,1.51-3.34,1.51s1.14,34.26,3.42,72.49c1.82,1.44,3.69,2.84,5.59,4.18,1.01.72,2.03,1.42,3.07,2.1a133.0909,133.0909,0,0,0,133.15,8.29Z" transform="translate(-69.01001 -168.94998)" fill={theme.palette.secondary.main}/><path d="M330.30005,417.67v80.28c-1.04-.68-2.06006-1.38-3.07007-2.1-1.8999-1.34-3.77-2.74-5.59-4.18-1.68-1.32-3.31994-2.69-4.93-4.09a133.16764,133.16764,0,0,1-22.35-25.04q-1.86-2.715-3.6-5.52,1.47-4.83,3.3-10.67C301.61,422.2,318.22,417.67,318.22,417.67Z" transform="translate(-69.01001 -168.94998)" fill={theme.palette.secondary.main}/><path d="M472.58,501.2c.88-.52,1.75-1.06,2.62-1.61q4.275-2.715,8.33-5.75c.74-.55,1.47-1.11,2.19-1.67a133.41933,133.41933,0,0,0,19.7-18.9c2.09-2.45,4.08-4.99,5.98-7.59-6.15-19.22-16.54-43.48-16.54-43.48l-21.14-1.51s-8.58,68.68-10.27,85.55Z" transform="translate(-69.01001 -168.94998)" fill={theme.palette.secondary.main}/><path d="M376.77516,302.50431a68.59116,68.59116,0,0,1-5.66782,4.33667,53.8824,53.8824,0,0,0-6.83273,6.78722l-2.33633,2.61573c-1.9882,2.226-4.09789,4.76652-4.014,7.74994.03114,1.107.37133,2.18118.50459,3.28059.52864,4.36124-2.137,9.1548.05728,12.96072.63439,1.10033,1.61561,1.96065,2.315,3.02088a7.06221,7.06221,0,0,1,1.11614,4.59872c2.358.09666,4.29237-2.01649,5.03191-4.25764s.63953-4.66228.99971-6.99466,1.37182-4.80207,3.49113-5.84044c4.52191-2.21554,9.71442,3.5448,14.541,2.10933,3.37-1.00228,5.14727-5.17993,8.59271-5.88046,2.466-.50139,4.84.96382,7.1322,2.00233s5.382,1.51925,7.00284-.40577c1.07309-1.2745,1.18762-3.31688,2.61091-4.183,1.70578-1.038,3.842.40723,5.13345,1.9301s2.718,3.385,4.714,3.32962c2.6479-.07353,4.6761-3.6,7.18943-2.76337,2.8368.94429,1.53211,5.4838,3.25332,7.9285,1.45517,2.06683,4.50251,1.94511,7.007,1.60364a2.50964,2.50964,0,0,0,2.61271-3.35108l-1.04612-13.87233a6.69786,6.69786,0,0,0-.61352-2.76857c-.72832-1.31945-2.23653-1.98767-3.26215-3.092-2.15642-2.32188-2.05279-6.39238-4.73431-8.08079-1.39236-.87669-3.21364-.85037-4.59615-1.74253-1.773-1.14414-2.34413-3.43554-3.58609-5.14144-1.7755-2.43875-4.87962-3.56945-7.88023-3.8797s-6.02918.06393-9.04451-.03441c-6.13016-.2-12.26013-1.92524-18.42018-.9153C382.67183,294.436,380.41543,298.99644,376.77516,302.50431Z" transform="translate(-69.01001 -168.94998)" fill="#2f2e41"/><circle cx="1022.01666" cy="122.51002" r="4.18624" fill="#3f3d56"/><circle cx="993.01666" cy="71.51002" r="4.18624" fill="#3f3d56"/><circle cx="981.01666" cy="16.51002" r="4.18624" fill="#3f3d56"/></svg>
                                :
                                <img src={authImage} alt="login" style={{maxWidth:'100%'}}/>
                            }
                        </Box>
                        <Box width="60%" display="flex" minHeight ={theme.breakpoints.width('sm') + 220} alignItems="flex-start" justifyContent = "center" position="relative" flexDirection ="column" pl={29} p={4} pr ={10}>
                            <div className={classes.authBackground}>
                                <svg height={theme.breakpoints.width('sm') + 300} viewBox="0 0 821 808" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M821 808V0.0446011C821 0.0446011 -174.76 -8.13898 81.8027 197.198C338.365 402.535 0 808 0 808H821Z"
                                        fill={theme.palette.secondary.main}/>
                                </svg>
                            </div>
                            <Box zIndex="10" mb={4} mt = {6} style={{cursor:'pointer'}} onClick={()=>history.push('/')}>
                                <Typography variant = "h2" className ={classes.logoText}>management</Typography>
                                <Typography variant = "h2" className ={classes.logoText}>restaurant.</Typography>
                            </Box>
                            <Box zIndex="10" width="100%">
                                <Paper elevation={2}>
                                    <Box display = "flex" alignItems = "center" justifyContent = "center" p = {4} flexDirection = "column">
                                        <Typography variant = "h2" className ={classes.logoText} paragraph> {title} </Typography>
                                        {error &&
                                            <Box mt = {1} mb = {1}>
                                                <Typography variant="subtitle2" color="error">{error}</Typography>
                                            </Box>
                                        }
                                        {children}
                                    </Box>
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            </Hidden>
        <Hidden lgUp>
            <Box width="100%" height="100vh"  style={{backgroundColor:theme.palette.secondary.main}} p={2}>
                <Box display="flex" flexDirection ="column" alignItems = "center" >
                    <Box zIndex="10" mb={4} mt = {6}>
                        <Typography variant = "h2" className ={classes.logoText}>management</Typography>
                        <Typography variant = "h2" className ={classes.logoText}>restaurant.</Typography>
                    </Box>
                    <Box zIndex="10" height="100%" width='100%' maxWidth='500px' mt={4} minWidth = "250px">
                        <Paper elevation={2} >
                            <Box display = "flex" alignItems = "center" justifyContent = "center" p = {4} flexDirection = "column">
                                <Typography variant = "h2" className ={classes.logoText} paragraph> {title} </Typography>
                                {children}
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </Hidden>
        </>
    )

}
export default AuthContainer;
