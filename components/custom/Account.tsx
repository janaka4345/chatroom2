import Link from 'next/link';
import User from './User';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const Account = ({
    login,
}: {
    login: boolean;
}) => {
    return (
        <>
            {!login ? (
                <div className="ml-auto hidden  w-fit space-x-3 md:flex ">
                    <Link
                        className={cn(
                            buttonVariants({ variant: 'default' }),
                            'transition-all duration-150 hover:scale-110'
                        )}
                        href="/api/auth/signin"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/api/auth/signin"
                        className={cn(
                            buttonVariants({ variant: 'tertiary' }),
                            'transition-all duration-150 hover:scale-110'
                        )}
                    >
                        Log In
                    </Link>
                </div>
            ) : (
                <User className="ml-auto flex h-8 w-8 md:h-10 md:w-10" />
            )}
        </>
    );
};
export default Account;
