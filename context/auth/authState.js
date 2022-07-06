import { useContext } from 'react'
import AuthContext from './authContext'

const useState = () => {
  return useContext(AuthContext)
}

export default useState