import Conversations from './_components/Conversations';
import Sidebar from './_components/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-4 flex h-[85svh] flex-row gap-4 px-4 ">
            <div className="flex w-[30%] flex-row gap-4 bg-red-500 rounded-3xl overflow-hidden">
                <Sidebar />
                <Conversations />
            </div>
            <div style={{
                background: 'radial-gradient(circle at 800px 0px, rgba(60,105,151,1) 0%, rgba(100,219,253,1) 88%)'
            }} className="relative  w-[70%] rounded-3xl overflow-hidden flex flex-col">{children}</div>
        </div>
    );
}
