import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='flex justify-between border-b-2 border-[#eee] items-end lg:items-center pt-[18px] pb-[19px] px-5 xl:px-10'>
				<div className='flex  xl:text-[20px] gap-5 xl:gap-10 justify-center  items-center'>
					<div>
						<svg
							role='img'
							aria-label='Logo Ableton'
							className='main-nav__logo__image w-[60px] h-8'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
							width='45'
							height='21'
							viewBox='0 0 45 21'
						>
							<path d='M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z'></path>
						</svg>
					</div>
					<div className='flex lg:hidden text-end text-xl align-text-bottom font-medium gap-2 items-end	'>
						<span>Menu </span>
						<div class='w-0 h-0 border-l-[4px] border-l-transparent border-t-[6.5px] border-t-black border-r-[4px] border-r-transparent'></div>
					</div>
					<div className='hidden lg:flex gap-5 xl:gap-7 font-medium'>
						<a
							href='
    '
						>
							Live
						</a>
						<a
							href='
    '
						>
							Push
						</a>
						<a
							href='
    '
						>
							Note
						</a>
						<a
							href='
    '
						>
							Link
						</a>
						<a
							href='
    '
						>
							Shop
						</a>
						<a
							href='
    '
						>
							Packs
						</a>
						<a
							href='
    '
						>
							Help
						</a>
						<a
							href=''
							className='text-[#ff764d] flex items-center gap-[3px]'
						>
							More{' '}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 12 16'
								id='Plus'
								className='size-4'
							>
								<path
									fill-rule='evenodd'
									d='M12 9H7v5H5V9H0V7h5V2h2v5h5z'
									fill='#ff764d'
									className='color000000 svgShape'
								></path>
							</svg>
						</a>
					</div>
				</div>

				<div className='hidden lg:flex items-center gap-4 xl:gap-8'>
					<a
						href='
                    '
						className='text-sm	 xl:text-[20px] font-medium text-[#0000ff]'
					>
						Try Live 12 for free
					</a>
					<a className='font-medium text-sm xl:text-base'>Log in or register</a>
				</div>
			</nav>
			<nav className='flex  xl:gap-[30px] gap-5 px-5 xl:text-base text-sm font-medium py-5 xl:py-[22px] xl:px-10'>
				<a
					href='
                '
					className='text-[#ff764d]'
				>
					About
				</a>
				<a href=''>Jobs</a>
				<a
					href='
                '
				>
					Apprenticeships
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
