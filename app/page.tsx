import { auth } from '@/auth';
import BentoMessage from './_components/BentoMessage';
import BentoImage from './_components/BentoImage';
export default async function Home() {
    console.log('home rendered');

    const session = await auth();
    return (
        <section className="g grid h-[85dvh] w-[100dvw] grid-cols-4 grid-rows-6 gap-4 px-4  lg:px-20">
            <div className=" col-start-1 col-end-2 row-start-1 row-end-2 bg-red-500">1</div>
            <div className=" col-start-2 col-end-4 row-start-1 row-end-4 bg-red-500">
                2
            </div>
            <div className=" col-start-4 col-end-5 row-start-1 row-end-3 bg-red-500">
                <BentoMessage />
            </div>
            <div className=" col-start-1 col-end-2 row-start-2 row-end-4 bg-red-500">4</div>
            <div className=" col-start-1 col-end-3 row-start-4 row-end-6 bg-red-500">5</div>
            <div className="relative col-start-3 col-end-5 row-start-4 row-end-7 bg-red-500"><BentoImage /></div>
            <div className=" col-start-2 col-end-3 row-start-6 row-end-7 bg-red-500">7</div>

            {/* <h1>Home page</h1>
            <Link href="/api/auth/signout">Sign Out</Link>
            <br /> */}

            {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        </section>
    );
}
