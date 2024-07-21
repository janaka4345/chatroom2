import { signIn } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SocialLogin() {

    return (
        <div className="flex flex-col gap-2">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <form
                action={async () => {
                    "use server"
                    await signIn("google", {
                        redirectTo: '/'
                    })
                }}
            >
                <Button variant="outline" className="w-full" type="submit">
                    <svg className="mr-4" width="18" height="18" fill="none" viewBox="0 0 14 14"><path fill="#FFC107" d="M12.7 5.9H7v2.3h3.3a3.5 3.5 0 1 1-1-3.8L11 2.7A5.8 5.8 0 0 0 1.2 7a5.8 5.8 0 1 0 11.5-1.1Z" /><path fill="#FF3D00" d="m1.8 4.3 2 1.4a3.5 3.5 0 0 1 5.5-1.3L11 2.7a5.8 5.8 0 0 0-9.2 1.6Z" /><path fill="#4CAF50" d="M7 12.8c1.5 0 2.9-.5 4-1.5L9 9.8a3.5 3.5 0 0 1-5.4-1.6L1.8 9.6c1 2 3 3.2 5.2 3.2Z" /><path fill="#1976D2" d="M12.7 5.9H7v2.3h3.3c-.2.6-.7 1.2-1.2 1.6l1.8 1.5c-.1.1 2-1.4 2-4.3l-.2-1.1Z" /></svg>
                    Google</Button>
            </form>
            <form
                action={async () => {
                    "use server"
                    await signIn("facebook", {
                        redirectTo: '/'
                    })
                }}
            >
                <Button variant="outline" className="w-full" type="submit">
                    <svg className="mr-4" width="18" height="18" fill="none" viewBox="0 0 14 14"><path fill="#1877F2" d="M7.8 12.2V7.5h1.6l.3-1.9H7.8V4.4c0-.5.2-1 1-1h1V1.9H8.2c-1.4 0-2.4.8-2.4 2.4v1.4H4.3v1.9h1.6v4.7h2Z" /></svg>
                    Facebook
                </Button>
            </form>
            <form
                action={async () => {
                    "use server"
                    await signIn("github", {
                        redirectTo: '/'
                    })
                }}
            >
                <Button variant="outline" className="w-full" type="submit">
                    <svg className="mr-4" width="18" height="18" fill="none" viewBox="0 0 14 14"><g clipPath="url(#a)"><path fill="#000" d="M7 0a7 7 0 0 0-2.2 13.6c.3.1.5-.1.5-.3V12c-1.8.3-2.3-.4-2.4-.8 0-.2-.4-.8-.7-1-.3-.1-.6-.5 0-.5.5 0 1 .5 1 .7.7 1.1 1.7.8 2 .6l.5-1c-1.5 0-3.1-.7-3.1-3.4 0-.7.2-1.4.7-1.8-.1-.2-.3-1 0-1.9 0 0 .6-.2 2 .7a6.5 6.5 0 0 1 3.5 0c1.3-.9 1.9-.7 1.9-.7.4 1 .1 1.7 0 1.9.5.4.8 1 .8 1.8 0 2.7-1.7 3.3-3.2 3.5.2.2.5.6.5 1.3v2s0 .3.4.2A7 7 0 0 0 7 0Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></svg>
                    GitHub
                </Button>
            </form>
        </div>
    )
}