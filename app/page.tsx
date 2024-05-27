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
        <section className="grid h-[85dvh] w-[100dvw] grid-cols-4 grid-rows-6 gap-4 px-4  lg:px-20">
            <div className=" col-start-1 col-end-2 row-start-1 row-end-2 bg-red-500 ">
                {/* <BentoDescription /> */}1
            </div>
            <div className="relative  col-start-2 col-end-4 row-start-1 row-end-4  bg-red-500">
                {/* <BentoImageMove /> */}2
            </div>
            <div className=" col-start-4 col-end-5 row-start-1 row-end-3 bg-red-500">
                {/* <BentoMessage /> */}3
            </div>
            <div className="z-50 col-start-1 col-end-2 row-start-2 row-end-4 bg-red-500">
                {/* <BentoUsercards /> */}4
            </div>
            <div className="relative col-start-1 col-end-3 row-start-4 row-end-6  bg-red-500">
                {/* <BentoInfo /> */}5
            </div>
            <div
                style={{
                    background:
                        'radial-gradient(circle at 0px 0px, hsl(var(--primary))  0%, hsl(var(--accent)) 100%)',
                }}
                className=" relative col-start-3 col-end-5 row-start-4 row-end-7 overflow-hidden rounded-3xl border border-gray-100   bg-red-500"
            >
                {/* <BentoPreview /> */}6
            </div>
            <div className=" relative col-start-2 col-end-3 row-start-6  row-end-7 bg-red-500">
                {/* <BentoUserNotification /> */}7
            </div>

            {/* <h1>Home page</h1>
            <Link href="/api/auth/signout">Sign Out</Link>
            <br /> */}

            {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        </section>
    );
}
