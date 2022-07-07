import { createContext, useReducer } from 'react'
import authReducer from './authReducer'
import clientAxios from '../../config/clientAxios'

import {
	USER_AUTHENTICATE,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	CLEANING_ALERT_MESSAGE,
} from '../types'

const AuthContext = createContext()

const initialState = {
	token: '',
	authenticated: null,
	user: null,
	message: null,
}

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState)

	const registerUser = async (data) => {
		try {
			const resp = await clientAxios.post('/api/users', data)
			dispatch({
				type: REGISTER_SUCCESS,
				payload: resp.data.msg,
			})
		} catch (error) {
			console.log(error)
			dispatch({
				type: REGISTER_FAILED,
				payload: error.response.data.msg,
			})
		} finally {
			setTimeout(() => {
				dispatch({
					type: CLEANING_ALERT_MESSAGE,
				})
			}, 3000)
		}
	}

	const userAuthenticated = (name) => {
		dispatch({
			type: USER_AUTHENTICATE,
			payload: name,
		})
	}

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				user: state.user,
				message: state.message,
				userAuthenticated,
				registerUser,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }

export default AuthContext
