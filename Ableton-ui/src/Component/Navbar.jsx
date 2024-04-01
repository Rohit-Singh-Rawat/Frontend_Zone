import React from 'react';

const Navbar = () => {
	return (
		<header>
			<nav className='flex justify-between border-b-2 border-[#eee] items-center pt-5 pb-[17px] px-10'>
				<div className='flex text-[20px] gap-10 justify-center  items-center'>
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
					<div className='flex gap-7 font-medium'>
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
							className='text-[#ff764d]'
						>
							More +
						</a>
					</div>
				</div>

				<div className='flex  items-center  gap-8'>
					<a
						href='
                    '
						className='text-[20px] font-medium text-[#0000ff]'
					>
						Try Live 12 for free
					</a>
					<a className='font-medium'>Log in or register</a>
				</div>
			</nav>
			<nav className='flex gap-[30px] font-medium py-[22px] px-10'>
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
		</header>
	);
};

export default Navbar;
