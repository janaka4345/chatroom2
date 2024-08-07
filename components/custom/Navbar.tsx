import Image from 'next/image';
import Link from 'next/link';
import Account from './Account';
import MobileNav from './MobileNav';
import { auth } from '@/auth';

export type MenuItems = {
    name: string;
    path: string;
};

const menuItems: MenuItems[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'My Messages',
        path: '/dashboard/conversations',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Pricing',
        path: '/#pricing',
    },
    {
        name: 'Contact Us',
        path: '/#contact',
    },
];

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className="flex flex-row items-center justify-between px-4 h-[10svh] backdrop:blur-md lg:px-20">
            <div className="mx-auto flex w-full flex-row max-w-screen-2xl flex-wrap items-center justify-between ">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src="/logo/Logo.png"
                        width={40}
                        height={40}
                        alt="Chatter Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold text-primary drop-shadow-lg ">
                        Chatter
                    </span>
                </Link>

                <div className="hidden w-full items-center justify-between  md:mx-auto md:flex md:w-fit">
                    <ul className="mt-4 flex flex-col rounded-lg border  font-medium md:mt-0 md:flex-row gap-2 text-sm lg:text-base lg:gap-8 md:border-0">
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.name}>
                                <Link
                                    href={menuItem.path}
                                    className=" block rounded px-3 py-2 text-primary drop-shadow-lg transition-all   duration-150  hover:scale-110 md:p-0 "
                                >
                                    {menuItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Account login={!!session?.user} />
                <MobileNav
                    menuItems={menuItems}
                    login={!!session?.user}
                />
            </div>
        </nav>
    );
}

export default Navbar
