import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Link href="/dashboard">
                <svg className=" w-8 h-8 fill-blue-500 stroke-orange-500">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#LuLayoutDashboard"></use>
                </svg>
            </Link>
            <br />

            <Link href="/dashboard/conversations">
                <svg className=" w-8 h-8 fill-blue-500">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#BiSolidMessageDetail"></use>
                </svg>
            </Link>
            <br />
            <Link href="/dashboard/users">
                {' '}
                <svg className=" w-8 h-8 fill-blue-500">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#FaUsers"></use>
                </svg>
            </Link>
            <br />
        </div>
    )
}
