import React from 'react';
import { commonCountries, countries } from './Countries';
import Socials from './Socials';
const Footer = () => {
	return (
		<div>
			<h1>Abelton</h1>
			<div>
				<div>
          <SignUpNewsletter></SignUpNewsletter>
          <Socials></Socials>
          <Education></Education>
				</div>
        <div>
          <Community></Community>
          <LanguageAndLocation></LanguageAndLocation>
        </div>
			</div>
      <div>
		<Bottom></Bottom>
      </div>
		</div>
	);
};


const Bottom = () => {
	return (
		<div>
			<div>
				{[
					'Contact',
					'UsPress',
					'ResourcesLegal',
					'InfoPrivacy',
					'PolicyCookie',
					'SettingsImprint',
				].map((text) => (
					<a key={text}>{text}</a>
				))}
			</div>
			<div>
				<h5>Made in Berlin</h5>
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
		<div>
			<h5>Community</h5>
			{[
				'Find Ableton User Groups',
				'Find Certified Training',
				'Become a Certified Trainer',
			].map((text, index) => (
				<a key={index}>{text}</a>
			))}
		</div>
	);
};

const LanguageAndLocation = () => {
	return (
		<div>
			<select
				name='language'
				id='language'
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
		<div>
			<h5>Education</h5>
			{[
				'Ableton for the classNameroom',
				'Offers for students and teachers ',
				'Ableton for Colleges and Universities',
			].map((text, index) => (
				<a key={index}>{text}</a>
			))}
		</div>
	);
};

const SignUpNewsletter = () => {
	return (
		<div>
			<h5>Sign up to our newsletter</h5>
			<p>
				Enter your email address to stay up to date with the latest offers,
				tutorials, downloads, surveys and more.
			</p>
			<form>
				<input
					type='text'
					name=''
					id=''
					placeholder='Email Address'
				/>
				<input
					type='submit'
					value='Sign Up'
				/>
			</form>
		</div>
	);
};

export default Footer;
