import ActiveFriends from './_components/ActiveFriends';
import Conversations from './_components/Conversations';
import Sidebar from './_components/Sidebar';

export default async function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-2 md:mx-4 flex h-[85svh] flex-col lg:flex-row gap-4 md:px-4 px-2">
            <div className="hidden md:flex w-[30%] flex-row gap-2 overflow-hidden rounded-3xl  border-2 ">
                <Sidebar />
                <Conversations />
            </div>
            <ActiveFriends />
            <div

                style={{
                    background:
                        'radial-gradient(circle at 800px 0px, rgba(60,105,151,1) 0%, rgba(100,219,253,1) 88%)',
                }}
                className="relative  flex w-[100%] md:w-[70%] flex-col overflow-hidden rounded-3xl md:pl-2 pt-2"
            >

                {children}
            </div>
        </div>
    );
}
