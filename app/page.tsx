import { auth } from '@/auth';
export default async function Home() {
    const session = await auth();
    return (
        <section className='grid grid-cols-4 grid-rows-6 gap-4 w-[100dvw] h-[85dvh] px-32 g'>
            <div className=" bg-red-500 col-start-2 col-end-4 row-start-1 row-end-4" ></div>
            <div className=" bg-red-500 col-start-4 col-end-5 row-start-1 row-end-3" ></div>
            <div className=" bg-red-500 col-start-1 col-end-2 row-start-2 row-end-4" ></div>
            <div className=" bg-red-500 col-start-3 col-end-5 row-start-4 row-end-7" ></div>
            <div className=" bg-red-500 col-start-1 col-end-3 row-start-4 row-end-6" ></div>
            <div className=" bg-red-500 col-start-2 col-end-3 row-start-6 row-end-7"></div>
            <div className=" bg-red-500 col-start-1 col-end-2 row-start-1 row-end-2"></div>

            {/* <h1>Home page</h1>
            <Link href="/api/auth/signout">Sign Out</Link>
            <br /> */}

            {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        </section>
    );
}
