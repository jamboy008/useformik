import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addUser, editUser } from '../redux/UserSlice'
import Button from './Button'

const validationSchema = Yup.object({
	firstName: Yup.string().min(2, 'Kamida 2 ta harf').required('Ism majburiy'),
	lastName: Yup.string()
		.min(2, 'Kamida 2 ta harf')
		.required('Familiya majburiy'),
	age: Yup.number()
		.typeError('Raqam kiriting')
		.min(1)
		.max(100)
		.required('Yosh majburiy'),
	email: Yup.string().email("Email noto'g'ri").required('Email majburiy'),
	phone: Yup.string().min(9, "Telefon noto'g'ri").required('Telefon majburiy'),
	city: Yup.string().required('Shahar majburiy'),
	profession: Yup.string().required('Kasb majburiy'),
})

function UserFormModal({ isOpen, onClose, user }) {
	const dispatch = useDispatch()
	const isEditMode = Boolean(user)

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: user?.firstName || '',
			lastName: user?.lastName || '',
			age: user?.age || '',
			email: user?.email || '',
			phone: user?.phone || '',
			city: user?.city || '',
			profession: user?.profession || '',
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (isEditMode) {
				dispatch(editUser({ ...user, ...values, age: Number(values.age) }))
			} else {
				dispatch(
					addUser({
						...values,
						id: Date.now(),
						age: Number(values.age),
						avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
					}),
				)
			}
			resetForm()
			onClose()
		},
	})

	if (!isOpen) return null

	const fields = [
		{ name: 'firstName', label: 'Ism' },
		{ name: 'lastName', label: 'Familiya' },
		{ name: 'age', label: 'Yosh', type: 'number' },
		{ name: 'email', label: 'Email', span: true },
		{ name: 'phone', label: 'Telefon' },
		{ name: 'city', label: 'Shahar' },
		{ name: 'profession', label: 'Kasb', span: true },
	]

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4'
			onClick={onClose}
		>
			<div
				className='w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-surface p-7 shadow-xl'
				onClick={e => e.stopPropagation()}
			>
				<div className='mb-6 flex items-start justify-between'>
					<h2 className='font-display text-lg font-bold text-text'>
						{isEditMode ? 'Xodimni tahrirlash' : "Yangi xodim qo'shish"}
					</h2>
					<button
						onClick={onClose}
						className='text-text-dim hover:text-text transition-colors text-xl leading-none cursor-pointer'
					>
						×
					</button>
				</div>

				<form onSubmit={formik.handleSubmit} className='grid grid-cols-2 gap-4'>
					{fields.map(field => (
						<div key={field.name} className={field.span ? 'col-span-2' : ''}>
							<label className='mb-1.5 block text-xs font-semibold text-text-dim'>
								{field.label}
							</label>
							<input
								type={field.type || 'text'}
								name={field.name}
								value={formik.values[field.name]}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15'
							/>
							{formik.touched[field.name] && formik.errors[field.name] && (
								<p className='mt-1 text-xs text-rose'>
									{formik.errors[field.name]}
								</p>
							)}
						</div>
					))}

					<div className='col-span-2 mt-2 flex justify-end gap-3 border-t border-border pt-5'>
						<Button
							type='button'
							variant='ghost'
							text='Bekor qilish'
							onClick={onClose}
						/>
						<Button
							type='submit'
							variant='secondary'
							text={isEditMode ? 'Saqlash' : "Qo'shish"}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default UserFormModal
	