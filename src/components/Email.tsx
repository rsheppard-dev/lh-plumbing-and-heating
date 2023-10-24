import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Tailwind,
	Text,
} from '@react-email/components';
import { type ContactInput } from '@/lib/validations';

export default function Email({
	firstName,
	lastName,
	phone,
	email,
	message,
}: ContactInput) {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className='mx-auto my-auto bg-white font-sans'>
					<Container className='mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
						<Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
							You got a message!
						</Heading>
						<Text className='text-[14px] leading-[24px] text-black'>
							You got an email from{' '}
							<strong>
								{firstName} {lastName}
							</strong>
							.
						</Text>
						<Text className='text-[14px] leading-[24px] text-black'>
							{message}
						</Text>
						<Text className='text-[14px] leading-[24px] text-black'>
							Call them back on:{' '}
							<Link href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</Link>.
							{email ? (
								<>
									<br />
									Or email them at:{' '}
									<Link href={`mailto:${email}`}>{email}</Link>.
								</>
							) : null}
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
