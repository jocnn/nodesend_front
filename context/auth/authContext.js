import { createContext, useReducer } from 'react'
import authReducer from './authReducer'
import clientAxios from '../../config/clientAxios'
import tokenAuth from '../../config/tokenAuth'

import {
	USER_AUTHENTICATE,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	CLEANING_ALERT_MESSAGE,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
} from '../types'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

	const initialState = {
		token:
			typeof window !== 'undefined' ? localStorage.getItem('token') : '',
		authenticated: false,
		user: null,
		message: null,
	}
	
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

	const userLogin = async (data) => {
		try {
			const resp = await clientAxios.post('/api/auth', data)
			console.log(resp.data.token)
			dispatch({
				type: LOGIN_SUCCESS,
				payload: resp.data.token,
			})
		} catch (error) {
			console.log(error.response.data.msg)
			dispatch({
				type: LOGIN_FAILED,
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

	const userAuthenticated = async () => {
		const token =
			typeof window !== 'undefined' ? localStorage.getItem('token') : ''

		if (token) {
			tokenAuth(token)
		}

		try {
			const resp = await clientAxios('/api/auth')
			dispatch({
				type: USER_AUTHENTICATE,
				payload: resp.data.user,
			})
		} catch (error) {
			dispatch({
				type: USER_AUTHENTICATE,
				payload: error.response.data.msg,
			})
		}
	}

	const userLogout = () => {
		dispatch({
			type: LOGOUT_SUCCESS
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
				userLogin,
				userLogout,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }

export default AuthContext
