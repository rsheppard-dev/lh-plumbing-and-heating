'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/gtag';

type Props = {
	GA_MEASUREMENT_ID: string;
};

export default function Analytics({ GA_MEASUREMENT_ID }: Props) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = pathname + searchParams.toString();

		pageview(GA_MEASUREMENT_ID, url);
	}, [GA_MEASUREMENT_ID, pathname, searchParams]);

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>

			<Script
				id='google-analytics'
				security='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('consent', 'default', {
                        'analytics_storage' : 'denied'
                    });

                    gtag('config', '${GA_MEASUREMENT_ID}');
                `,
				}}
			/>
		</>
	);
}
