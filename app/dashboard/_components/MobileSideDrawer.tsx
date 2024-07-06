import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Sidebar from "./Sidebar"
import Conversations from "./Conversations"

function MobileSideDrawer() {
    return (
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button className="block lg:hidden absolute left-0 top-1/2 z-50 " variant="outline">&gt;</Button>
            </DrawerTrigger>
            <DrawerContent className="h-[100svh] w-[60svh]">
                <div className="mx-2  flex h-[85svh] flex-row  gap-4  px-2">
                    <Sidebar />
                    <Conversations />
                </div>
            </DrawerContent>
        </Drawer>

    )
}
export default MobileSideDrawer