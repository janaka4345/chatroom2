import { auth } from '@/auth';
import AvatarIcon from './AvatarIcon';
export default async function User({ className }: { className?: string }) {
    const session = await auth();

    if (!session?.user) {
        return null;
    }
    return (
        <AvatarIcon
            className={className}
            image={session?.user?.image!}
            name={session.user?.name as string}
        />
        // TODO user setiings including edit profile sign out etc
    );
}
