import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { type MenuItems } from './Navbar';
const MobileNav = ({
    menuItems,
    login,
}: {
    menuItems: MenuItems[];
    login: boolean;
}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex space-x-3 md:hidden  ">
                    <Button
                        variant="ghost"
                        className=" inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:scale-110 md:hidden "
                        aria-controls="navbar"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </Button>
                </div>
            </SheetTrigger>
            <SheetContent className=" h-[100dvh]   w-[60dvw] pb-0">
                <div className="flex h-[100dvh] flex-col gap-2  pb-10">
                    {menuItems.map((menuItem) => (
                        <SheetClose
                            key={menuItem.path}
                            asChild
                        >
                            <Link
                                href={menuItem.path}
                                className={cn(
                                    buttonVariants({ variant: 'outline' }),
                                    'text-sm'
                                )}
                            >
                                {menuItem.name}
                            </Link>
                        </SheetClose>
                    ))}
                    {!login && (
                        <div className="mt-auto flex flex-col gap-2 ">
                            <SheetClose asChild>
                                <Link
                                    className={cn(
                                        buttonVariants({ variant: 'default' })
                                    )}
                                    href="/api/auth/signin"
                                >
                                    Sign In
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link
                                    href="/api/auth/signin"
                                    className={cn(
                                        buttonVariants({ variant: 'tertiary' })
                                    )}
                                >
                                    Log In
                                </Link>
                            </SheetClose>
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNav;
