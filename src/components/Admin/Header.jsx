import React from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import Logo from '../../assets/profile.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({token, user, setUser}) => {

	const navigate = useNavigate()

  return (
    <div className='bg-white h-16 px-4 flex items-center justify-between border-b border-gray-200'>
        <div className='flex items-center gap-2'>
            <h1 className='text-[18px] font-bold'>Admin Panel</h1>
        </div>

        <div className='flex items-center gap-2 mr-2'>
			<Link to='/admin/chat'>
				<div className='group inline-flex items-center rounded-sm p-1.5 text-gray-700 text-[18px] hover:text-primaryColor focus:outline-none active:bg-gray-100'>
					<i class="ri-chat-1-line"></i>
				</div>
			</Link>

            <Menu as="div" className="relative inline-block text-left">
                <div>
					<Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<div className='h-10 w-10 rounded-full bg-sky-500 bg-cover'
							style={{backgroundImage : `url(${Logo})`}}>
								<span className='sr-only'>Muhtasin Jawad</span>
							</div>
					</Menu.Button>
                </div>
				<Transition
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
				>
				<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
						<Menu.Item>
							{({ active }) => (
								<div className={`${active ? 'bg-gray-100' : ''}
                                text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2`}
								onClick={() => navigate('/profile')}>
									Your Profile
								</div>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<div className={`${active ? 'bg-gray-100' : ''}
                                text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2`}
								onClick={() => navigate('/setting')}>
									Settings
								</div>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<div className={`${active ? 'bg-gray-100' : ''}
                                text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2`}
									onClick={() => {localStorage.removeItem('token'); setUser(false); navigate('/login'); window.location.reload()}}>
									Logout
								</div>
							)}
						</Menu.Item>
				</Menu.Items>
				</Transition>
            </Menu>
        </div>
    </div>
  )
}

export default Header