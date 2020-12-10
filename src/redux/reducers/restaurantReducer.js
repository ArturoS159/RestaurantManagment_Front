import {restaurantConstants} from '../types';


const initialState = {
    isRequesting:false,
    isDeleteRequesting:false,
    isStepperOpen:false,
    restaurants:[],
    error:null,
    selectedRestaurant:null,

};

export const restaurantReducer = (state = initialState, action)=>{
    switch(action.type){
        case restaurantConstants.ADD_RESTAURANT_OPEN_STEPPER:
            return {
                ...state,
                isStepperOpen: true,
            }
        case restaurantConstants.ADD_RESTAURANT_CLOSE_STEPPER:
            return {
                ...state,
                isStepperOpen: false,
            }
        case restaurantConstants.RESTAURANT_REQUEST:
            return {
                ...state,
                isRequesting: true,
                error: null,
            }
        case restaurantConstants.ADD_RESTAURANT_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                restaurants: [...state.restaurants, action.payload],
                isStepperOpen: false,
            }
        case restaurantConstants.ADD_RESTAURANT_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.payload,
            }
        case restaurantConstants.GET_RESTAURANTS_FOR_ADMIN_SUCCESS:
            return {
                ...state,
                isRequesting:false,
                restaurants: action.payload,
            }
        case restaurantConstants.GET_RESTAURANTS_FOR_ADMIN_ERROR:
            return {
                ...state,
                isRequesting:false,
                error: action.payload,
            }
        case restaurantConstants.SELECT_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: action.payload
            }
        case restaurantConstants.UNSELECT_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: null,
            }
        case restaurantConstants.GET_SINGLE_RESTAURANT_FOR_ADMIN_SUCCESS:
            return {
                ...state,
                selectedRestaurant: action.payload,
                isRequesting: false,
            }
        case restaurantConstants.GET_SINGLE_RESTAURANT_FOR_ADMIN_ERROR:
            return {
                ...state,
                error:action.payload,
                isRequesting: false,
            }
        case restaurantConstants.DELETE_RESTAURANT_REQUEST:
            return {
                ...state,
                isDeleteRequesting: true,
                error: null
            }
        case restaurantConstants.DELETE_RESTAURANT_SUCCESS:
            const foundMatchIndexDeletingRestaurant = state.restaurants.findIndex(restaurant=>restaurant.id === state.selectedRestaurant.id);
            const newRestaurantsArray = [...state.restaurants];
            newRestaurantsArray.splice(foundMatchIndexDeletingRestaurant,1)
            return {
                ...state,
                isDeleteRequesting:false,
                restaurants:newRestaurantsArray,
                selectedRestaurant: null,
            };
        case restaurantConstants.DELETE_RESTAURANT_ERROR:
            return {
                ...state,
                isDeleteRequesting: false,
                error: action.payload
            }
        case restaurantConstants.EDIT_RESTAURANT_SUCCESS:
            const foundMatchIndexOfEditingRestaurant = state.restaurants.findIndex(restaurant=>restaurant.id === action.payload.id);
            const newRestaurantsOfEditingArray = [...state.restaurants];
            newRestaurantsOfEditingArray.splice(foundMatchIndexOfEditingRestaurant,1,action.payload);
            return {
                ...state,
                isRequesting: false,
                selectedRestaurant: action.payload,
                restaurants: newRestaurantsOfEditingArray,
            }
        case restaurantConstants.EDIT_RESTAURANT_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.payload
            }
        case restaurantConstants.RESET:
            return initialState;
        default:
            return {...state}
    }

}

