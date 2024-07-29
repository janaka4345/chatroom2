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
                    {/* <svg width="11" height="49" viewBox="0 0 11 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 6.5C5.25 4.70234 4.91484 3.25 4.5 3.25C4.08516 3.25 3.75 4.70234 3.75 6.5V45.5C3.75 47.2977 4.08516 48.75 4.5 48.75C4.91484 48.75 5.25 47.2977 5.25 45.5V6.5ZM8.25 6.5C8.25 4.70234 7.91484 3.25 7.5 3.25C7.08516 3.25 6.75 4.70234 6.75 6.5V45.5C6.75 47.2977 7.08516 48.75 7.5 48.75C7.91484 48.75 8.25 47.2977 8.25 45.5V6.5Z" fill="black" />
                    </svg> */}
                    <svg width="11" height="49" fill="none" viewBox="0 0 11 49"><path fill="#000" d="M5.3 6.5c0-1.8-.4-3.3-.8-3.3s-.8 1.5-.8 3.3v39c0 1.8.4 3.3.8 3.3s.8-1.5.8-3.3v-39Zm3 0c0-1.8-.4-3.3-.8-3.3s-.8 1.5-.8 3.3v39c0 1.8.4 3.3.8 3.3s.8-1.5.8-3.3v-39Z" /></svg>

                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[100svh] w-[80svw]">
                {/* <DialogTitle className="DialogTitle">Side Menu</DialogTitle> */}
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