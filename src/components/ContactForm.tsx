'use client';

import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { contactSchema, type ContactInput } from '@/lib/validations';
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm() {
	function messageSent() {
		toast.success('Message sent successfully!');
	}

	async function handleSubmit(
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
			fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
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
				<Form className='px-6 py-3 sm:px-8 sm:py-4 bg-brand-blue space-y-4'>
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
						<Field type='text' name='firstName' required />
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
						<Field type='text' name='lastName' required />
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
						<Field type='tel' name='phone' required />
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
						<Field type='email' name='email' />
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
						<Field as='textarea' name='message' rows={6} required />
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
					<ToastContainer
						position='bottom-center'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='light'
					/>
				</Form>
			)}
		</Formik>
	);
}
