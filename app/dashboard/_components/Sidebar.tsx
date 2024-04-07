import User from '@/components/custom/User'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Link href="/dashboard">
                <svg className=" w-8 h-8 fill-black mt-auto  stroke-black">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#LuLayoutDashboard"></use>
                </svg>
            </Link>
            <br />

            <Link href="/dashboard/conversations">
                <svg className=" w-8 h-8 fill-black mt-auto ">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#BiSolidMessageDetail"></use>
                </svg>
            </Link>
            <br />
            <Link href="/dashboard/users">
                {' '}
                <svg className=" w-8 h-8 fill-black mt-auto ">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#FaUsers"></use>
                </svg>
            </Link>
            <br />

            <Link href="/dashboard/settings" className="mt-auto">
                {' '}
                <svg className=" w-8 h-8 fill-black   ">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#FiSettings"></use>
                </svg>
            </Link>
        </div>
    )
}
