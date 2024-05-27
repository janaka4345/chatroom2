import { auth } from '@/auth';
import BentoMessage from './_components/BentoMessage';
import BentoImage from './_components/BentoImage';
import BentoInfo from './_components/BentoInfoDefault';
import BentoUserNotification from './_components/BentoUserNotification';
import BentoUsercards from './_components/BentoUsercards';
import BentoImageMove from './_components/BentoImageMove';
import BentoPreview from './_components/BentoPreview';
export default async function Home() {
    // console.log('home rendered');

    const session = await auth();
    return (
        <section className="grid h-[85dvh] w-[100dvw] grid-cols-4 grid-rows-6 gap-4 px-4  lg:px-20">
            <div className=" col-start-1 col-end-2 row-start-1 row-end-2 ">
                1
            </div>
            <div className="relative  col-start-2 col-end-4 row-start-1 row-end-4  ">
                {/* <BentoImage /> */}
                <BentoImageMove />
            </div>
            <div className=" col-start-4 col-end-5 row-start-1 row-end-3 ">
                <BentoMessage />
            </div>
            <div className="z-50 col-start-1 col-end-2 row-start-2 row-end-4 ">
                <BentoUsercards />
            </div>
            <div className="relative col-start-1 col-end-3 row-start-4 row-end-6  ">
                <BentoInfo />
            </div>
            <div className=" col-start-3 col-end-5 row-start-4 row-end-7 bg-red-500 relative">
                <BentoPreview />
            </div>
            <div className=" col-start-2 col-end-3 row-start-6 row-end-7  relative">
                <BentoUserNotification />
            </div>

            {/* <h1>Home page</h1>
            <Link href="/api/auth/signout">Sign Out</Link>
            <br /> */}

            {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        </section>
    );
}
