import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../redux/UserSlice'
import Button from './Button'
import TableRow from './TableRow'
import UserFormModal from './UserFormModal'

function Table() {
	const data = useSelector(state => state.users.users)
	const dispatch = useDispatch()

	const [search, setSearch] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingUser, setEditingUser] = useState(null)

	const filtered = useMemo(() => {
		const q = search.trim().toLowerCase()
		if (!q) return data
		return data.filter(
			u =>
				u.firstName.toLowerCase().includes(q) ||
				u.lastName.toLowerCase().includes(q) ||
				u.city.toLowerCase().includes(q) ||
				u.profession.toLowerCase().includes(q),
		)
	}, [data, search])

	function handleDelete(id) {
		dispatch(deleteUser(id))
	}

	function handleEdit(user) {
		setEditingUser(user)
		setIsModalOpen(true)
	}

	function handleAdd() {
		setEditingUser(null)
		setIsModalOpen(true)
	}

	function handleCloseModal() {
		setIsModalOpen(false)
		setEditingUser(null)
	}

	return (
		<div className='min-h-screen bg-bg px-6 py-10 md:px-12'>
			<div className='mx-auto max-w-7xl'>
				<div className='mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<h1 className='font-display text-2xl font-bold text-text'>
							Xodimlar bazasi
						</h1>
						<p className='mt-1 text-sm text-text-dim'>
							Jami {data.length} ta xodim ro'yxatga olingan
						</p>
					</div>
				</div>

				<div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
					<div className='relative w-full sm:w-80'>
						<svg
							className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-dim'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
						<input
							type='text'
							value={search}
							onChange={e => setSearch(e.target.value)}
							placeholder="Ism, shahar yoki kasb bo'yicha qidirish..."
							className='w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3.5 text-sm text-text placeholder:text-text-dim outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15'
						/>
					</div>
					<Button
						text='Add'
						variant='secondary'
						onClick={handleAdd}
					/>
				</div>

				<div className='overflow-hidden rounded-xl border border-border bg-surface shadow-sm'>
					<div className='overflow-x-auto'>
						<table className='w-full border-collapse'>
							<thead>
								<tr className='border-b border-border bg-slate-50'>
									{[
										'',
										'Ism',
										'Familiya',
										'Yosh',
										'Email',
										'Telefon',
										'Shahar',
										'Kasb',
										'Amallar',
									].map((h, i) => (
										<th
											key={i}
											className='px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-text-dim'
										>
											{h}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{filtered.map(user => (
									<TableRow
										user={user}
										key={user.id}
										handleDelete={handleDelete}
										handleEdit={handleEdit}
									/>
								))}
								{filtered.length === 0 && (
									<tr>
										<td
											colSpan={9}
											className='px-4 py-12 text-center text-sm text-text-dim'
										>
											Hech narsa topilmadi
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<UserFormModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				user={editingUser}
			/>
		</div>
	)
}

export default Table
