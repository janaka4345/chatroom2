import Conversations from './_components/Conversations';
import MobileSideDrawer from './_components/MobileSideDrawer';
import Sidebar from './_components/Sidebar';

export default async function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-2 md:mx-4 flex h-[85svh] flex-col md:flex-row gap-4 md:px-4 px-2">
            <div className="hidden lg:flex w-[30%]  flex-row gap-2 overflow-hidden rounded-3xl  border-2 ">
                <Sidebar />
                <Conversations />
            </div>
            <MobileSideDrawer />

            <div
                // style={{
                //     background:
                //         'radial-gradient(circle at 800px 0px, rgba(60,105,151,1) 0%, rgba(100,219,253,1) 88%)',
                // }}
                className="relative h-[85svh]  flex   w-[100%] lg:w-[70%] flex-col overflow-hidden"
            >
                {children}
            </div>
        </div>
    );
}
