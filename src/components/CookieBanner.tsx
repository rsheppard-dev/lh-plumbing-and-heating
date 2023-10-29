'use client';

import { useState, useEffect, useCallback } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';

export default function CookieBanner() {
	const [isVisible, setIsVisible] = useState(false);

	const setCookieConsent = useCallback((isAllowed: boolean) => {
		const newValue = isAllowed ? 'granted' : 'denied';

		setLocalStorage('cookie_consent', isAllowed);

		window.gtag('consent', 'update', {
			analytics_storage: newValue,
		});
	}, []);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage('cookie_consent', null);

		storedCookieConsent === null && setIsVisible(true);

		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	function handleChangeConsent(isAllowed: boolean) {
		setCookieConsent(isAllowed);
		setIsVisible(false);
	}

	if (!isVisible) {
		return null;
	}
	return (
		<div className='flex my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-brand-blue shadow'>
			<div className='text-center'>
				<p className='font-sourceSans text-white'>
					We use cookies on our site for analytic purposes.
				</p>
			</div>

			<div className='flex gap-2'>
				<button
					onClick={() => handleChangeConsent(false)}
					className='font-montserrat text-sm px-4 py-2 text-zinc-200 border border-sky-600'
				>
					Decline
				</button>
				<button
					onClick={() => handleChangeConsent(true)}
					className='font-montserrat bg-brand-yellow px-4 py-2 text-sm text-zinc-900'
				>
					Allow Cookies
				</button>
			</div>
		</div>
	);
}
