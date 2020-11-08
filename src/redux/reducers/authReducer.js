import {authConstants} from '../types';


const initialState = {
    isLoggedIn: false,
    token:null,
    isLoading: false,
    error: null,
    userType:null,
};
export const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case authConstants.LOGIN_REQUEST :
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case authConstants.LOGIN_SUCCESS :
            return {
                ...state,
                isLoggedIn: true,
                token:action.payload,
                isLoading: false,
                error: null,

            };
        case authConstants.LOGIN_ERROR :
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            };
        case authConstants.LOGOUT :
            return {
                ...state,
                isLoggedIn: false,
                token:null,
                isLoading: false,
                error: null,
            };

        default:
            return {...state};

    }
}
