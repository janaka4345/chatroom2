import ActiveFriends from "../_components/ActiveFriends";

function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full flex flex-col border rounded-xl overflow-hidden">
            <ActiveFriends className='lg:hidden' />
            {children}
        </div>
    )
}
export default layout