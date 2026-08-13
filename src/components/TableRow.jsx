import React from 'react'
import Button from './Button'

function TableRow({ user, handleDelete, handleEdit }) {
	return (
		<tr className='border-b border-border last:border-b-0 hover:bg-slate-50/80 transition-colors'>
			<td className='px-4 py-3'>
				<img
					src={user.avatar}
					alt={user.firstName}
					className='h-9 w-9 rounded-full border border-border object-cover'
				/>
			</td>
			<td className='px-4 py-3 text-sm font-medium text-text'>
				{user.firstName}
			</td>
			<td className='px-4 py-3 text-sm text-text'>{user.lastName}</td>
			<td className='px-4 py-3 text-sm text-text-dim'>{user.age}</td>
			<td className='px-4 py-3 text-sm text-text-dim'>{user.email}</td>
			<td className='px-4 py-3 text-sm text-text-dim'>{user.phone}</td>
			<td className='px-4 py-3 text-sm text-text-dim'>{user.city}</td>
			<td className='px-4 py-3'>
				<span className='rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent'>
					{user.profession}
				</span>
			</td>
			<td className='px-4 py-3'>
				<div className='flex items-center justify-center gap-2'>
					<Button onClick={() => handleEdit(user)} variant='edit' text='Edit' />
					<Button
						onClick={() => handleDelete(user.id)}
						variant='delete'
						text='Delete'
					/>
				</div>
			</td>
		</tr>
	)
}

export default TableRow
