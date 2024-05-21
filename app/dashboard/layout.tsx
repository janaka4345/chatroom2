import Conversations from './_components/Conversations';
import Sidebar from './_components/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-4 flex h-[100svh] flex-row gap-4 px-4 ">
            <div className="flex w-[30%] flex-row gap-4 bg-red-500 ">
                <Sidebar />
                <Conversations />
            </div>
            <div className="relative  w-[70%]  bg-green-500">{children}</div>
        </div>
    );
}
