import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Account from "./Account"
const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex md:hidden space-x-3  ">
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:scale-110 " aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
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
    )
}
export default MobileNav