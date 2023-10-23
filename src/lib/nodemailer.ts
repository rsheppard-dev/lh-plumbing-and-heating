import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer-smtp-transport';

export const user = process.env.CONTACT_EMAIL;
export const pass = process.env.CONTACT_PASSWORD;

export const transporter = nodemailer.createTransport(
	SMTPTransport({
		service: 'gmail',
		auth: {
			user,
			pass,
		},
	})
);
