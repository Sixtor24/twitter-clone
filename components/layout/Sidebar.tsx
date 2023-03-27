import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa'
import { signOut } from 'next-auth/react';
import SidebarLogo from './SiderbarLogo'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton';
import useCurrentUser from '../../hooks/useCurrentUser';

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    const items = [
        {
            icon: BsHouseFill,
            label: 'Home',
            href: '/',
        },
        {
            icon: BsBellFill,
            label: 'Notifications',
            href: '/notifications',
            auth: true,
            alert: true
        },
        {
            icon: FaUser,
            label: 'Profile',
            href: `/users/${currentUser?.id}`,
            auth: true,
        },
    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            label={item.label}
                            auth={item.auth}
                            alert={item.alert}
                        />
                        ))}
                        {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
                        <SidebarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar