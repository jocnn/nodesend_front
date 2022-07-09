import {
	USER_AUTHENTICATE,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	CLEANING_ALERT_MESSAGE,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
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
			return {
				...state,
			}
		case LOGIN_FAILED:
			return {
				...state,
				message: action.payload,
			}
		default:
			return state
	}
}

export default authReducer
