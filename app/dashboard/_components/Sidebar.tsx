import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="mt-4 flex flex-col gap-4">
            <Link href="/dashboard">
                <svg className=" mt-auto h-8 w-8 fill-black  stroke-black">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#LuLayoutDashboard"></use>
                </svg>
            </Link>
            <br />

            <Link href="/dashboard/conversations">
                <svg className=" mt-auto h-8 w-8 fill-black ">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#BiSolidMessageDetail"></use>
                </svg>
            </Link>
            <br />
            <Link href="/dashboard/users">
                {' '}
                <svg className=" mt-auto h-8 w-8 fill-black ">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#FaUsers"></use>
                </svg>
            </Link>
            <br />

            <Link
                href="/dashboard/settings"
                className="mt-auto"
            >
                {' '}
                <svg className=" h-8 w-8 fill-black   ">
                    <use xlinkHref="http://localhost:3000/svg/sprite.svg#FiSettings"></use>
                </svg>
            </Link>
        </div>
    );
}
