import { auth } from '@/auth';
import BentoMessage from './_components/BentoMessage';
import BentoImage from './_components/BentoImage';
import BentoInfo from './_components/BentoInfoDefault';
import BentoUserNotification from './_components/BentoUserNotification';
import BentoUsercards from './_components/BentoUsercards';
import BentoImageMove from './_components/BentoImageMove';
import BentoPreview from './_components/BentoPreview';
import BentoDescription from './_components/BentoDescription';
export default async function Home() {
    // console.log('home rendered');

    const session = await auth();
    return (
        <section className="grid h-[100dvh] w-[100dvw] grid-cols-4  grid-rows-5 gap-2 px-4 pb-2 md:h-[85dvh]  md:grid-rows-6  md:gap-4 lg:px-20">
            <div className="z-50 col-start-1 col-end-2 row-start-1 row-end-2  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2  ">
                <BentoDescription />
                {/* 1 */}
            </div>
            <div className="relative col-start-1 col-end-5 row-start-4 row-end-5 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-4  ">
                <BentoImageMove />
                {/* 2 */}
            </div>
            <div className="z-50 col-start-2 col-end-5 row-start-1 row-end-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3 ">
                <BentoMessage />
                {/* 3 */}
            </div>
            <div className="z-50 col-start-1 col-end-3 row-start-3 row-end-4  md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4 ">
                <BentoUsercards />
                {/* 4 */}
            </div>
            <div className="relative col-start-1 col-end-5 row-start-2 row-end-3 md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-6  ">
                <BentoInfo />
                {/* 5 */}
            </div>
            <div
                style={{
                    background:
                        'radial-gradient(circle at 0px 0px, hsl(var(--primary))  0%, hsl(var(--accent)) 100%)',
                }}
                className=" relative col-start-1 col-end-5 row-start-5 row-end-6 overflow-y-auto overflow-x-hidden  rounded-3xl border border-gray-100 md:col-start-3 md:col-end-5 md:row-start-4 md:row-end-7   "
            >
                <BentoPreview />
                {/* 6 */}
            </div>
            <div className=" relative col-start-3 col-end-5 row-start-3 row-end-4 md:col-start-2 md:col-end-3 md:row-start-6  md:row-end-7">
                <BentoUserNotification />
                {/* 7 */}
            </div>

            {/* <h1>Home page</h1>
            <Link href="/api/auth/signout">Sign Out</Link>
            <br /> */}

            {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        </section>
    );
}
