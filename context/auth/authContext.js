import { createContext, useReducer } from 'react'
import authReducer from './authReducer'
import clientAxios from '../../config/clientAxios'

import {
	USER_AUTHENTICATE,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	CLEANING_ALERT_MESSAGE,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from '../types'

const AuthContext = createContext()

const initialState = {
	token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
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

	const userLogin = async data => {
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
				userLogin,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }

export default AuthContext
