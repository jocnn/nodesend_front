import { createContext, useReducer } from 'react'
import authReducer from './authReducer'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const initialState = {
		token: '',
		authenticated: null,
		user: null,
		message: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

  return <AuthContext.Provider
    value={{
      token: state.token,
      authenticated: state.authenticated,
      user: state.user,
      message: state.message,
    }}>
    {children}
  </AuthContext.Provider>
}

export { AuthProvider }

export default AuthContext
