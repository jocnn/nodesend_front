import { USER_AUTHENTICATE } from '../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_AUTHENTICATE:
      return {
        ...state,
        user: action.payload,
      }
		default:
			return state
	}
}

export default authReducer
