import { auth } from '@/auth';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import AvatarIcon from './AvatarIcon';
import Link from 'next/link';
export default async function User({ className }: { className?: string }) {
    const session = await auth();

    if (!session?.user) {
        return null;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AvatarIcon
                    className={`${className} cursor-pointer`}
                    image={session?.user?.image!}
                    name={session.user?.name as string}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <h1>name name2</h1>
                    <p>email</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href='/dashboard'>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/notification'>Notifications</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/settings'>Settings</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/api/auth/signout'>Log out</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        // TODO user setiings including edit profile sign out etc
    );
}
