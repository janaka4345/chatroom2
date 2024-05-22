import Image from 'next/image';
import Link from 'next/link';
import Account from './Account';

export default function Navbar() {
    const menuItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
        },
        {
            name: 'Pricing',
            path: '/pricing',
        },
        {
            name: 'Contact Us',
            path: '/contact',
        },
    ];
    return (
        <nav className="px-4  lg:px-20 backdrop:blur-md">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src="/logo/logo.png"
                        width={40}
                        height={40}
                        alt="Chatter Logo"
                    />
                    <span className="self-center drop-shadow-lg whitespace-nowrap text-2xl font-semibold text-primary ">
                        Chatter
                    </span>
                </Link>
                <div className="flex space-x-3  ">
                    {/* <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-200  :bg-gray-700 :ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> */}
                </div>
                <div className="hidden w-full items-center justify-between  md:mx-auto md:flex md:w-fit">
                    <ul className="md: mt-4 flex flex-col rounded-lg border  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0   ">
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.name}>
                                <Link
                                    href={menuItem.path}
                                    className=" block rounded px-3 py-2 text-primary transition-all drop-shadow-lg   duration-150  hover:scale-110 md:p-0 "
                                >
                                    {menuItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Account />
            </div>
        </nav>
    );
}
