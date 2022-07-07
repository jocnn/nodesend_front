import useAuth from '../context/auth/authState'

const Alert = () => {

  const { message } = useAuth()

  return (
    <div className='bg-green-300 py-2 px-3 w-full my-3 max-w-lg text-center text-black mx-auto'>
      { message }
    </div>
  )
}

export default Alert