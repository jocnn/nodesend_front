import React from 'react'
import Layout from '../components/layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../context/auth/authState'

import Alert from '../components/alert'

const SignIn = () => {

	const { userAuthenticated, registerUser, message } = useAuth()

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			name: Yup
				.string()
				.required('El nombre es obligatorio'),
			email: Yup
				.string()
				.email('El correo no es válido')
				.required('El correo es obligatorio'),
			password: Yup
				.string()
				.required('La contraseña no puede ir vacia')
				.min(6, 'La contraseña debe contener al menos 6 caracteres'),
		}),
		onSubmit: (values) => {
			registerUser(values)
		},
	})

	return (
		<Layout>
			<div className='md:w-4/5 xl:w-3/5 mx-auto mb-32'>
				<h2 className='text-4xl font-sans font-bold text-gray-800 text-center my-4'>
					Crear Cuenta
				</h2>
				<div className='flex justify-center mt-5'>
					<div className='w-full max-w-lg'>

						{ message && <Alert /> }

						<form
							className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
							onSubmit={formik.handleSubmit}>
							<div className='mb-4'>
								<label
									className='block text-black text-sm font-bold mb-2'
									htmlFor='name'>
									Nombre
								</label>
								<input
									id='name'
									type='text'
									className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									placeholder='Nombre de usuario'
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="name"
								/>
								{formik.touched.name && formik.errors.name ? (
									<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
										<p className='font-bold'>Error</p>
										<p>{formik.errors.name}</p>
									</div>
								) : null}
							</div>

							<div className='mb-4'>
								<label
									className='block text-black text-sm font-bold mb-2'
									htmlFor='email'>
									Correo Electrónico
								</label>
								<input
									id='email'
									type='email'
									className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									placeholder='Correo Electrónico de tu usuario'
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="email"
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
										<p className='font-bold'>Error</p>
										<p>{formik.errors.email}</p>
									</div>
								) : null}
							</div>

							<div className='mb-4'>
								<label
									className='block text-black text-sm font-bold mb-2'
									htmlFor='password'>
									Contraseña
								</label>
								<input
									id='password'
									type='password'
									className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									placeholder='Contraseña de usuario'
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="current-password"
								/>
								{formik.touched.password &&
								formik.errors.password ? (
									<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
										<p className='font-bold'>Error</p>
										<p>{formik.errors.password}</p>
									</div>
								) : null}
							</div>

							<input
								type='submit'
								value='Crear Cuenta'
								className='bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer'
							/>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default SignIn
