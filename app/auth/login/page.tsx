import Link from "next/link";
import { LoginAuthForm } from "../_components/LoginAuthForm";

export default function page() {
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Log In to your account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email and password  below to log in
                </p>
            </div>
            <LoginAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
                Don't remember your password{' '}
                <Link
                    href="/passwordRecovery"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Click Here
                </Link>{" "}
            </p>
        </div>

    )
}