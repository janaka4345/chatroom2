import Conversations from './_components/Conversations';
import Sidebar from './_components/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row gap-4 mx-4 p-4 h-[100svh] ">
            <div className="w-[30%] bg-red-500 flex flex-row gap-4 ">
                <Sidebar />
                <Conversations />
            </div>
            <div className="w-[70%]  bg-green-500  relative">{children}</div>
        </div>
    );
}
