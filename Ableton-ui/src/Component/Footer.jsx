import React from 'react';
import { commonCountries, countries } from './Countries';
import Socials from './Socials';
const Footer = () => {
	return (
		<footer className='min-h-screen font-normal text-xl px-[8.5vw] pt-[4vw]'>
			<h1 className='text-6xl font-medium'>Ableton</h1>
			<div className='flex flex-col gap-12 pt-[4vw]'>
				<div className='flex'>
					<Socials></Socials>
					<Education></Education>
					<SignUpNewsletter></SignUpNewsletter>
				</div>
				<div className='flex gap-[10vw]'>
					<Community></Community>
					<LanguageAndLocation></LanguageAndLocation>
				</div>
			</div>
			<div className='mt-[6vw]'>
				<Bottom></Bottom>
			</div>
		</footer>
	);
};

const Bottom = () => {
	return (
		<div className='flex justify-between'>
			<div className='flex gap-3'>
				{[
					'Contact Us',
					'Press Resources',
					'Legal Info',
					'Privacy Policy',
					'Cookie Settings',
					'Imprint',
				].map((text) => (
					<a
						key={text}
						className='font-medium text-sm'
					>
						{text}
					</a>
				))}
			</div>
			<div className='flex gap-3'>
				<h5 className='font-medium text-sm'>Made in Berlin</h5>
				<svg
					role='img'
					aria-label='Logo Ableton'
					className='main-nav__logo__image'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					width='45'
					height='21'
					viewBox='0 0 45 21'
				>
					<path d='M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z'></path>
				</svg>
			</div>
		</div>
	);
};

const Community = () => {
	return (
		<div className=' flex flex-col'>
			<h5 className='font-medium'>Community</h5>
			{[
				'Find Ableton User Groups ›',
				'Find Certified Training ›',
				'Become a Certified Trainer ›',
			].map((text, index) => (
				<a key={index}>{text}</a>
			))}
		</div>
	);
};

const LanguageAndLocation = () => {
	return (
		<div>
			<h5 className='font-medium'>Language and Location</h5>
			<select
				name='language'
				id='language'
				className='text-sm font-medium p-1 bg-[#eee] '
			>
				{['English', 'Deutsh', '日本語', '简体中文', 'Español'].map(
					(lang, index) => (
						<option value={lang}>{lang}</option>
					)
				)}
			</select>
			<select
				name='location'
				id='location'
				className='text-sm max-w-[200px] font-medium p-1 bg-[#eee] '
			>
				<option>Please Choose</option>
				<optgroup label='Common Countries'>
					{commonCountries.map((country, index) => (
						<option
							key={index}
							value={country}
						>
							{country}
						</option>
					))}
				</optgroup>
				<optgroup label='All Countries/Regions'>
					{countries.map((country, index) => (
						<option
							key={index}
							value={country}
						>
							{country}
						</option>
					))}
				</optgroup>
			</select>
		</div>
	);
};

const Education = () => {
	return (
		<div className='flex flex-col  min-w-[28vw]'>
			<h5 className='font-medium'>Education</h5>
			{[
				'Offers for students and teachers ›',
				'Ableton for the classNameroom ›',

				'Ableton for Colleges and Universities ›',
			].map((text, index) => (
				<a key={index}>{text}</a>
			))}
		</div>
	);
};

const SignUpNewsletter = () => {
	return (
		<div className=''>
			<h5 className='font-medium'>Sign up to our newsletter</h5>
			<p>
				Enter your email address to stay up to date with the latest offers,
				tutorials, downloads, surveys and more.
			</p>
			<form className='flex mt-8	'>
				<input
					type='text'
					name=''
					id=''
					placeholder='Email Address'
					className='bg-[#eee] py-2 pl-4 w-full'
				/>
				<input
					type='submit'
					value='Sign up'
					className='bg-[#0000ff] py-2 px-7 text-white font-medium'
				/>
			</form>
		</div>
	);
};

export default Footer;
