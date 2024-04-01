import React from 'react';
import header from '../assets/Images/header.avif';
import img1 from '../assets/Images/photo-1.jpg';
import img2 from '../assets/Images/photo-2.jpg';
import img3 from '../assets/Images/photo-3.jpg';
import img4 from '../assets/Images/photo-4.jpg';
import img5 from '../assets/Images/photo-5.jpg';
import img6 from '../assets/Images/photo-6-a.jpg';
import img7 from '../assets/Images/photo-7.jpg';
import img8 from '../assets/Images/photo-8.jpg';
import img9 from '../assets/Images/poster-juanpe.avif';
import img10 from '../assets/Images/poster-meet-the-makers (1).avif';
const MainContent = () => {
	return (
		<main className='pb-[8.5vw] border-b-2 border-[#eee]'>
			<div className='relative flex justify-center   items-center'>
				<img
					src={header}
					alt=''
					className='px-[8.3vw] min-h-[calc(100vh_-_130px)]  object-cover '
				/>
				<span className='text-red-500 text-[145px] -translate-x-[50%] -translate-y-[50%] z-30 absolute top-[50%] text-center left-[50%]'>
					Ableton
				</span>
			</div>
			<Para
				h1={
					<>
						We make <a className='text-[#0000ff]'>Live</a>,{' '}
						<a className='text-[#0000ff]'>Push</a>,{' '}
						<a className='text-[#0000ff]'>Note</a> and{' '}
						<a className='text-[#0000ff]'>Link</a> — unique software and
						hardware for music creation and performance. With these products,
						our community of users creates amazing things.
					</>
				}
				para={
					'Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.'
				}
			></Para>

			<div className='flex relative py-[8.4vw] px-[4vw] justify-around items-center'>
				<div className='w-[57vw]  absolute top-0 right-0  -z-10 h-[56.9vw] bg-[#fbffa7]'></div>
				<img
					src={img1}
					alt=''
					className='h-[40vw] z-10 inline-block'
				/>
				<img
					src={img2}
					alt=''
					className='h-[25vw] z-10 inline-block'
				/>
			</div>

			<Para
				h1={
					'Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.'
				}
				para={
					'We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.'
				}
			></Para>

			<div className='flex flex-col   justify-center items-center '>
				<div>
					<div className='relative'>
						<img
							src={img9}
							alt=''
							className='w-[50vw] object-contain'
						/>
						<div className='w-full absolute top-0 flex justify-center items-center h-full '>
							<div className='w-24 h-24 flex justify-center items-center rounded-full bg-[#0000ff]'>
								<svg
									class='abl-circle__icon'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 48 56'
									className='text-white pl-1 fill-current w-8 h-8'
								>
									<polygon
										fill='currentColor'
										points='0 0 0 56 48 28 0 0'
									></polygon>
								</svg>
							</div>
						</div>
					</div>
					<p className='text-left font-medium my-2 ml-2 inline-block'>
						Why Ableton - Juanpe Bolivar
					</p>
				</div>
			</div>

			<Para
				h1={
					'We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.'
				}
				para={
					'Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: ing to shape the future of music culture.'
				}
			></Para>
			<div className='relative '>
				<div className='w-[58.3vw] h-[75vw] -z-30 bg-[#b6ffc0] top-0 left-0 absolute'></div>
				<div className='flex justify-center gap-[9vw] items-center px-[8vw] py-[8vw]'>
					<div className='flex flex-col  gap-[8vw]'>
						<img
							src={img3}
							alt=''
							className='h-[25vw] w-[33vw]'
						/>
						<img
							src={img4}
							alt=''
							className='h-[25vw] w-[33vw]'
						/>
					</div>
					<img
						src={img5}
						alt=''
						className='w-[42vw] h-[42vw]'
					/>
				</div>
			</div>
			<Para
				h1={
					'We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.'
				}
				para={
					'Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.'
				}
			></Para>
			<div className='px-[8.5vw]'>
				<img
					src={img10}
					alt=''
					className='w-full h-full '
				/>
			</div>
			<Para
				h1={
					'We’re passionate about what we do, but we’re equally passionate about improving who we are.'
				}
				para={
					<>
						We work hard to foster an environment where people can grow both
						personally and professionally, and we strive to create a wealth of
						opportunities to learn from and with each other. <br />
						Alongside an internal training program, employees are actively
						supported in acquiring new knowledge and skills, and coached on
						applying these in their daily work. In addition, staff-organized
						development and music salons are a chance to discuss new
						technologies, production techniques and best practices.
					</>
				}
			></Para>
			<div className='relative flex justify-end items-center gap-[15vw] py-[8vw] '>
				<div className='w-[66.6vw] left-[50%] -translate-x-[50%]   h-[58.4vw] -z-30 bg-[#d5b3ff] top-0 absolute'></div>
				<img
					src={img6}
					alt=''
					className='h-[25vw]'
				/>
				<img
					src={img7}
					alt=''
					className='w-[42vw] h-[42vw]'
				/>
			</div>
			<Para
				h1={
					'We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.'
				}
				para={
					"If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
				}
			></Para>
			<div className='px-[8.3vw] flex'>
				<img
					src={img8}
					alt=''
					className='w-[41.4vw] h-[41.4vw] object-cover object-right'
				/>
				<div className='w-[41.4vw] flex flex-col gap-10 h-[41.4vw] py-[14vw] font-medium px-[8.3vw] text-3xl bg-[#b1c5ff]'>
					<p>
						We’re really proud of the work we’ve done so far. But there’s so
						much more to come. If you’d like to be a part of it, please join us.
					</p>
					<a
						href=''
						className='text-[#0000ff]'
					>
						See latest jobs ›
					</a>
				</div>
			</div>
		</main>
	);
};
const Para = ({ h1, para }) => {
	return (
		<div className='flex my-[8vw] px-2 flex-col gap-5 w-[51vw] m-auto '>
			<h1 className='text-3xl font-medium leading-[1.4]'>{h1}</h1>
			<p className='text-xl leading-medium font-normal '>{para}</p>
		</div>
	);
};

export default MainContent;
