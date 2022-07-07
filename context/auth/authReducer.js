import {
	USER_AUTHENTICATE,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	CLEANING_ALERT_MESSAGE,
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
		default:
			return state
	}
}

export default authReducer
