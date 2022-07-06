import { createContext, useReducer } from 'react'
import authReducer from './authReducer'

import { USER_AUTHENTICATE } from '../types'

const AuthContext = createContext()

const initialState = {
  token: '',
  authenticated: null,
  user: null,
  message: null,
}

const AuthProvider = ({ children }) => {

	const [state, dispatch] = useReducer(authReducer, initialState)

  const userAuthenticated = name => {
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
			}}>
			{children}
		</AuthContext.Provider>
  )
}

export { AuthProvider }

export default AuthContext
