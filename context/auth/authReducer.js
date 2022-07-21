import {
	USER_AUTHENTICATE,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	CLEANING_ALERT_MESSAGE,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
} from '../types'

const authReducer = (state, action) => {
	switch (action.type) {
		case USER_AUTHENTICATE:
			return {
				...state,
				user: action.payload,
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				message: action.payload,
			}
		case REGISTER_FAILED:
			return {
				...state,
				message: action.payload,
			}
		case CLEANING_ALERT_MESSAGE:
			return {
				...state,
				message: null,
			}
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload)
			return {
				...state,
				token: action.payload,
				authenticated: true,
			}
		case LOGIN_FAILED:
			return {
				...state,
				message: action.payload,
			}
		case LOGOUT_SUCCESS:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				authenticated: null,
				user: null,
			}
		default:
			return state
	}
}

export default authReducer
