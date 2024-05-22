import Link from 'next/link';
import User from './User';
import { buttonVariants } from '../ui/button';

const Account = () => {
    return (
        <>
            {true ? (
                <div className="ml-auto flex  w-fit space-x-3">
                    <Link
                        className={buttonVariants()}
                        href="/api/auth/signin"
                        // className=":bg-blue-700 :ring-blue-800 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-4 focus:ring-blue-300"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/api/auth/signin"
                        className={buttonVariants()}
                        // className=":bg-blue-700 :ring-blue-800 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-4 focus:ring-blue-300"
                    >
                        Log In
                    </Link>
                </div>
            ) : (
                <User className="ml-auto flex h-10 w-10" />
            )}
        </>
    );
};
export default Account;
