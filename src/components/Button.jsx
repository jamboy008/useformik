import React from 'react'

const variants = {
	edit: 'bg-sky-soft text-sky border border-sky/20 hover:bg-sky/10',
	secondary:
		'bg-accent text-white hover:bg-accent/90 shadow-sm shadow-accent/25',
	delete: 'bg-rose-soft text-rose border border-rose/20 hover:bg-rose/10',
	danger: 'bg-rose-soft text-rose border border-rose/20 hover:bg-rose/10',
	ghost:
		'bg-transparent text-text-dim border border-border hover:border-border-strong hover:text-text',
}

function Button({
	text,
	variant = 'edit',
	onClick,
	type = 'button',
	...props
}) {
	const baseStyles =
		'inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30'

	return (
		<button
			type={type}
			onClick={onClick}
			className={`${baseStyles} ${variants[variant] || variants.edit}`}
			{...props}
		>
			{text}
		</button>
	)
}

export default Button
