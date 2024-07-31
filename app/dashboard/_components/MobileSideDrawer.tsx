import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import Conversations from "./Conversations";
import Sidebar from "./Sidebar";

function MobileSideDrawer() {
    return (
        <Drawer direction="left"  >
            <DrawerTrigger asChild >
                <Button className="block lg:hidden absolute w-fit h-fit p-0 left-0 top-1/2 z-50 bg-gray-400 my-2 " variant="default">
                    <svg width="11" height="49" fill="none" viewBox="0 0 11 49"><path fill="#000" d="M5.3 6.5c0-1.8-.4-3.3-.8-3.3s-.8 1.5-.8 3.3v39c0 1.8.4 3.3.8 3.3s.8-1.5.8-3.3v-39Zm3 0c0-1.8-.4-3.3-.8-3.3s-.8 1.5-.8 3.3v39c0 1.8.4 3.3.8 3.3s.8-1.5.8-3.3v-39Z" /></svg>

                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[100svh] w-[80svw]">
                <DialogTitle className="DialogTitle">Side Menu</DialogTitle>
                <div className="md:mx-2 relative  flex h-[95svh] flex-row gap-2 md:gap-4  md:px-2">
                    <DialogClose>
                        <Sidebar />
                    </DialogClose>
                    <Conversations />
                </div>
            </DrawerContent>
        </Drawer>

    )
}
export default MobileSideDrawer