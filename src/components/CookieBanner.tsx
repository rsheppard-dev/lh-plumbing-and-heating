'use client';

import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';

export default function CookieBanner() {
	const [cookieConsent, setCookieConsent] = useState(false);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage('cookie_consent', null);

		setCookieConsent(storedCookieConsent);
	}, []);

	useEffect(() => {
		const newValue = cookieConsent ? 'granted' : 'denied';

		window.gtag('consent', 'update', {
			analytics_storage: newValue,
		});

		setLocalStorage('cookie_consent', cookieConsent);
	}, [cookieConsent]);
	return (
		<div
			className={`${
				cookieConsent !== null ? 'hidden' : 'flex'
			} my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-brand-blue shadow`}
		>
			<div className='text-center'>
				<p className='font-sourceSans text-white'>
					We use cookies on our site for analytic purposes.
				</p>
			</div>

			<div className='flex gap-2'>
				<button
					onClick={() => setCookieConsent(false)}
					className='font-montserrat text-sm px-4 py-2 text-zinc-200 border border-sky-600'
				>
					Decline
				</button>
				<button
					onClick={() => setCookieConsent(true)}
					className='font-montserrat bg-brand-yellow px-4 py-2 text-sm text-zinc-900'
				>
					Allow Cookies
				</button>
			</div>
		</div>
	);
}
