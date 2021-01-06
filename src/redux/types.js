export const authConstants = {
    LOGIN_REQUEST : "LOGIN_REQUEST",
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
    LOGOUT: "LOGOUT",
    AUTHORIZATION_SUCCESS:"AUTHORIZATION_SUCCESS",
    AUTHORIZATION_ERROR:"AUTHORIZATION_ERROR",
    RETURN_INITIAL_STATE:"RETURN_INITIAL_STATE",
    PERSONAL_DATA_SUCCESS:'PERSONAL_DATA_SUCCESS',
    PERSONAL_DATA_ERROR:"PERSONAL_DATA_ERROR",
    PERSONAL_DATA_REQUEST:"PERSONAL_DATA_REQUEST",
}
export const registerConstants = {
    REGISTER_REQUEST: "REGISTER_REQUEST",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_ERROR: "REGISTER_ERROR",
    CONFIRM_REGISTER_SUCCESS:"CONFIRM_REGISTER_SUCCESS",
    CONFIRM_REGISTER_ERROR:"CONFIRM_REGISTER_ERROR",
    RETURN_INITIAL_STATE:"RETURN_INITIAL_STATE",
}
export const restaurantConstants = {
    ADD_RESTAURANT_OPEN_STEPPER: "ADD_RESTAURANT_OPEN_STEPPER",
    ADD_RESTAURANT_CLOSE_STEPPER:"ADD_RESTAURANT_CLOSE_STEPPER",
    RESTAURANT_REQUEST: "RESTAURANT_REQUEST",
    ADD_RESTAURANT_SUCCESS: "ADD_RESTAURANT_SUCCESS",
    ADD_RESTAURANT_ERROR: "ADD_RESTAURANT_ERROR",
    GET_RESTAURANTS_FOR_ADMIN_SUCCESS:"GET_RESTAURANTS_FOR_ADMIN_SUCCESS",
    GET_RESTAURANTS_FOR_ADMIN_ERROR:"GET_RESTAURANTS_FOR_ADMIN_ERROR",
    SELECT_RESTAURANT:"SELECT_RESTAURANT",
    UNSELECT_RESTAURANT:"UNSELECT_RESTAURANT",
    GET_SINGLE_RESTAURANT_FOR_ADMIN_SUCCESS:'GET_SINGLE_RESTAURANT_FOR_ADMIN_SUCCESS',
    GET_SINGLE_RESTAURANT_FOR_ADMIN_ERROR:'GET_SINGLE_RESTAURANT_FOR_ADMIN_ERROR',
    DELETE_RESTAURANT_SUCCESS:"DELETE_RESTAURANT_SUCCESS",
    DELETE_RESTAURANT_ERROR:"DELETE_RESTAURANT_ERROR",
    DELETE_RESTAURANT_REQUEST:"DELETE_RESTAURANT_REQUEST",
    EDIT_RESTAURANT_SUCCESS:"EDIT_RESTAURANT_SUCCESS",
    EDIT_RESTAURANT_ERROR:"EDIT_RESTAURANT_ERROR",
    RESET:"RESET"
}

export const workersConstants = {
    WORKERS_REQUEST:"WORKERS_REQUEST",
    GET_WORKERS_SUCCESS:"GET_WORKERS_SUCCESS",
    GET_WORKERS_ERROR:"GET_WORKERS_ERROR",
    ADD_REQUEST:"ADD_REQUEST",
    ADD_WORKER_SUCCESS:"ADD_WORKER_SUCCESS",
    ADD_WORKER_ERROR:"ADD_WORKER_ERROR",
    DELETE_REQUEST:"DELETE_REQUEST",
    DELETE_WORKER_SUCCESS:"DELETE_WORKER_SUCCESS",
    DELETE_WORKER_ERROR:"DELETE_WORKER_ERROR",
    RESET:"RESET"
}

export const mealsConstants = {
    MEALS_REQUEST: 'MEALS_REQUEST',
    GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
    GET_MEALS_ERROR: "GET_MEALS_ERROR",
    ADD_MEAL_REQUEST: "ADD_MEAL_REQUEST",
    ADD_MEAL_SUCCESS: "ADD_MEAL_SUCCESS",
    ADD_MEAL_ERROR: 'ADD_MEAL_ERROR',
    OPEN_DRAWER: "OPEN_DRAWER",
    CLOSE_DRAWER: "CLOSE_DRAWER",
    EDIT_MEAL: "EDIT_MEAL",
    EDIT_MEAL_REQUEST: "EDIT_MEAL_REQUEST",
    EDIT_MEAL_SUCCESS: "EDIT_MEAL_SUCCESS",
    EDIT_MEAL_ERROR: "EDIT_MEAL_ERROR",
    DELETE_MEAL_REQUEST: "DELETE_MEAL_REQUEST",
    DELETE_MEAL_SUCCESS: "DELETE_MEAL_SUCCESS",
    DELETE_MEAL_ERROR: "DELETE_MEAL_ERROR",
    RESET: "RESET",
}

export const basketConstants = {
    GET_BASKET:"GET_BASKET",
    ADD_PRODUCT:"ADD_PRODUCT",
    DELETE_PRODUCT:"DELETE_PRODUCT",
    COUNT_PRODUCTS_AND_PRICE:"COUNT_PRODUCTS_AND_PRICE",
    INCREMENT_PRODUCT:"INCREMENT_PRODUCT",
    DECREMENT_PRODUCT:"DECREMENT_PRODUCT",
}

export const alertConstants = {
    SUCCESS_ALERT:"SUCCESS_ALERT",
    ERROR_ALERT:"ERROR_ALERT",
    RESET_ALERT:"RESET_ALERT",
}
export const paymentConstants = {
    GET_PERSONAL_DATA_SUCCESS:"GET_PERSONAL_DATA_SUCCESS",
    GET_PERSONAL_DATA_ERROR:"GET_PERSONAL_DATA_ERROR",
    GET_BASKET_SUCCESS:"GET_BASKET_SUCCESS",
    CHANGE_ORDER_DETAIL:"CHANGE_ORDER_DETAIL",
    SUBMIT_REQUEST:"SUBMIT_REQUEST",
    DELETE_SUCCESS_ORDER:"DELETE_SUCCESS_ORDER",
    PAYMENT_END:"PAYMENT_END",
}

