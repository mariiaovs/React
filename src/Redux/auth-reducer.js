import { headerAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
    //isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const authorise = () => {
    return (dispatch) => {
        headerAPI.authorise()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email));
            }

        });
    }
}


export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: { id, login, email } })

export default authReducer;