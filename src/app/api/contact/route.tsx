import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/components';
import { transporter, user } from '@/lib/nodemailer';
import Email from '@/components/Email';
import { ContactInput } from '@/lib/validations';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = (await req.json()) as ContactInput;
	const { firstName, lastName, phone, email, message } = body;

	const emailHtml = render(
		<Email
			firstName={firstName}
			lastName={lastName}
			phone={phone}
			email={email}
			message={message}
		/>
	);

	const options = {
		from: user,
		to: user,
		replyTo: email,
		subject: 'New Form Submission',
		html: emailHtml,
	};

	try {
		await transporter.sendMail(options);
	} catch (error) {
		console.log('Failed to send email:', error);
	}

	return new Response('OK');
}
