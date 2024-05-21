import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-gray-200 bg-white ">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src="/logo/logo.png"
                        width={52}
                        height={52}
                        alt="Chatter Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold text-primary ">
                        Chatter
                    </span>
                </Link>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className=":bg-blue-700 :ring-blue-800 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-4 focus:ring-blue-300"
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className=":bg-blue-700 :ring-blue-800 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-4 focus:ring-blue-300"
                    >
                        Log In
                    </button>
                    {/* <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  :bg-gray-700 :ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> */}
                </div>
                <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
                    <ul className="md: mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0  rtl:space-x-reverse ">
                        <li>
                            <Link
                                href="#"
                                className="md::text-blue-500 :bg-gray-700 :text-white md::bg-transparent block rounded px-3 py-2 text-gray-900 hover:bg-gray-100  md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="md::text-blue-500 :bg-gray-700 :text-white md::bg-transparent block rounded px-3 py-2 text-gray-900 hover:bg-gray-100  md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                            >
                                Downloads
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="md::text-blue-500 :bg-gray-700 :text-white md::bg-transparent block rounded px-3 py-2 text-gray-900 hover:bg-gray-100  md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="md::text-blue-500 :bg-gray-700 :text-white md::bg-transparent block rounded px-3 py-2 text-gray-900 hover:bg-gray-100  md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
