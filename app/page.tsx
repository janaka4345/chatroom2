import Link from 'next/link';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function Home() {
    const session = await auth();
    return (
        <div>
            <h1>Home page</h1>
            <Button>click</Button>
            <Link href="/api/auth/signin">Sign In</Link>
            <br />
            <Link href="/api/auth/signout">Sign Out</Link>
            <br />
            <Link href="/dashboard">dashboard</Link>
            <br />
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
}
