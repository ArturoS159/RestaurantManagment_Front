import React, {useEffect, useState} from 'react';
import {authorization, checkIsLoggedIn} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import DelayedRedirect from "./DelayedRedirect";
import {routes} from "../../config/routes";
import {history} from "../../helpers/_helpers";
import Page500 from "../../pages/Page500";
import CircularProgress from "../CircularProgress";
import Page404 from "../../pages/Page404";

const AuthProvider = ({children}) =>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    const authError = useSelector(state=>state.auth.error);
    const restaurantError = useSelector(state=>state.restaurant.error);
    const mealError = useSelector(state=>state.meals.error);
    const workersError = useSelector(state=>state.workers.error);
    const userType = useSelector(state=>state.auth.userType);
    const ordersError = useSelector(state=>state.orders.error);
    const tablesError = useSelector(state=>state.tables.error);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        const checkAuth = () =>{
            checkIsLoggedIn(dispatch)
                .then(()=>{
                    userType.length ?
                        setIsLoading(false)
                      :
                        authorization(dispatch)
                            .then(()=>setIsLoading(false))
                            .catch(()=>setIsLoading(false))
                })
                .catch(()=>setIsLoading(false));
        }
        checkAuth();
        return () => setIsLoading(true);
    },[dispatch,userType.length]);


    if((authError || restaurantError || mealError || workersError || ordersError || tablesError) === 500){
        return <Page500/>
    }else if((authError || restaurantError || mealError || workersError || ordersError|| tablesError) === 404){
        return <Page404/>
    }

   return(
       <>
           {
               isLoading ? (
                   <CircularProgress/>
               ):(
                   isLoggedIn ?
                       <div>
                        {children}
                       </div>
                       :
                       <DelayedRedirect path={routes.LOGIN} from={history.pathname}/>
               )
           }
       </>
   )
}
export default AuthProvider;
