export default function ContactForm() {
	return (
		<form className='px-6 py-3 sm:px-8 sm:py-4 bg-brand-blue space-y-4'>
			<div className='flex flex-col gap-2'>
				<label
					className='font-sourceSans font-bold text-sm text-white'
					htmlFor='firstName'
				>
					First Name{' '}
					<span className='font-sourceSans font-bold text-sm text-brand-yellow'>
						*
					</span>
				</label>
				<input type='text' name='firstName' required />
			</div>
			<div className='flex flex-col gap-2'>
				<label
					className='font-sourceSans font-bold text-sm text-white'
					htmlFor='lastName'
				>
					Last Name{' '}
					<span className='font-sourceSans font-bold text-sm text-brand-yellow'>
						*
					</span>
				</label>
				<input type='text' name='lastName' required />
			</div>
			<div className='flex flex-col gap-2'>
				<label
					className='font-sourceSans font-bold text-sm text-white'
					htmlFor='phone'
				>
					Phone Number{' '}
					<span className='font-sourceSans font-bold text-sm text-brand-yellow'>
						*
					</span>
				</label>
				<input type='tel' name='phone' required />
			</div>
			<div className='flex flex-col gap-2'>
				<label
					className='font-sourceSans font-bold text-sm text-white'
					htmlFor='email'
				>
					Email{' '}
				</label>
				<input type='email' name='email' />
			</div>
			<div className='flex flex-col gap-2'>
				<label
					className='font-sourceSans font-bold text-sm text-white'
					htmlFor='message'
				>
					Message{' '}
					<span className='font-sourceSans font-bold text-sm text-brand-yellow'>
						*
					</span>
				</label>
				<textarea required rows={6}></textarea>
			</div>

			<button
				type='submit'
				className='font-sourceSans font-bold text-zinc-900 text-sm bg-brand-yellow px-6 py-3 enabled:hover:bg-yellow-300 transition-colors disabled:opacity-60'
			>
				Send Message
			</button>
		</form>
	);
}
