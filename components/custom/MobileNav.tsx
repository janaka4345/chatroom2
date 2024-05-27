import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import Account from './Account';
const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex space-x-3 md:hidden  ">
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:scale-110 md:hidden "
                        aria-controls="navbar-cta"
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
                    </button>
                </div>
            </SheetTrigger>
            <SheetContent>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        home
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        dashboard
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Account />
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNav;
