import Link from 'next/link'

export default function Sidebar() {
    return (
        <>
            <div>Sidebar</div>
            <Link href="/dashboard">dashboard</Link>
            <br />
            <svg className=" w-4 h-4 fill-blue-500">
                <use xlinkHref="http://localhost:3000/svg/sprite.svg#FaUsers"></use>
            </svg>
            <svg className=" w-4 h-4 fill-blue-500 stroke-orange-500">
                <use xlinkHref="http://localhost:3000/svg/sprite.svg#LuLayoutDashboard"></use>
            </svg>
            <svg className=" w-4 h-4 fill-blue-500">
                <use xlinkHref="http://localhost:3000/svg/sprite.svg#BiSolidMessageDetail"></use>
            </svg>
            <Link href="/dashboard/conversations">conversations</Link>
            <br />
            <Link href="/dashboard/users">users</Link>
            <br />
        </>
    )
}
