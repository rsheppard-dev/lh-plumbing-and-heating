'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { contactSchema, type ContactInput } from '@/lib/validations';
import toast, { Toaster } from 'react-hot-toast';
import { FaThumbsUp } from 'react-icons/fa';
import { encode } from '@/lib/utils';

type Props = {
	successMessage: string;
};
export default function ContactForm({ successMessage }: Props) {
	function messageSent() {
		toast.custom(t => (
			<div
				className={`${t.visible ? 'animate-enter' : 'animate-leave'}
			 	max-w-fit bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
			>
				<div className='p-4 flex gap-4'>
					<span>
						<FaThumbsUp aria-hidden className='fill-brand-blue' />
					</span>
					<span className='font-sourceSans font-bold text-zinc-900'>
						{successMessage}
					</span>
				</div>
			</div>
		));
	}

	function handleSubmit(
		values: ContactInput,
		{
			setSubmitting,
			resetForm,
		}: {
			setSubmitting: (isSubmitting: boolean) => void;
			resetForm: () => void;
		}
	) {
		try {
			fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: encode({ 'form-name': 'contact', ...values }),
			});

			resetForm();

			messageSent();
		} catch (error) {
			console.log('Failed to send email:', error);
		} finally {
			setSubmitting(false);
		}
	}
	return (
		<Formik
			initialValues={{
				companyName: '',
				'form-name': 'contact',
				firstName: '',
				lastName: '',
				phone: '',
				email: '',
				message: '',
			}}
			validationSchema={toFormikValidationSchema(contactSchema)}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form
					className='px-6 py-3 sm:px-8 sm:py-4 bg-brand-blue space-y-4'
					action='/contact.html'
					netlify-honeypot='bot-field'
					data-netlify='true'
				>
					<Field type='hidden' name='companyName' />
					<Field type='hidden' name='form-name' value='contact' />
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
						<Field type='text' name='firstName' id='firstName' required />
						<ErrorMessage
							name='firstName'
							component='div'
							className='font-sourceSans font-bold text-xs text-brand-yellow'
						/>
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
						<Field type='text' name='lastName' id='lastName' required />
						<ErrorMessage
							name='lastName'
							component='div'
							className='font-sourceSans font-bold text-xs text-brand-yellow'
						/>
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
						<Field type='tel' name='phone' id='phone' required />
						<ErrorMessage
							name='phone'
							component='div'
							className='font-sourceSans font-bold text-xs text-brand-yellow'
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<label
							className='font-sourceSans font-bold text-sm text-white'
							htmlFor='email'
						>
							Email{' '}
						</label>
						<Field type='email' name='email' id='email' />
						<ErrorMessage
							name='email'
							component='div'
							className='font-sourceSans font-bold text-xs text-brand-yellow'
						/>
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
						<Field
							as='textarea'
							name='message'
							id='message'
							rows={6}
							required
						/>
						<ErrorMessage
							name='message'
							component='div'
							className='font-sourceSans font-bold text-xs text-brand-yellow'
						/>
					</div>

					<button
						disabled={isSubmitting}
						type='submit'
						className='font-sourceSans font-bold text-zinc-900 text-sm bg-brand-yellow px-6 py-3 enabled:hover:bg-yellow-300 transition-colors disabled:opacity-60'
					>
						Send Message
					</button>
					<Toaster position='bottom-center' />
				</Form>
			)}
		</Formik>
	);
}
