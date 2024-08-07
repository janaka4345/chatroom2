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
            <p className="text-start text-sm text-muted-foreground">
                Don&apos;t have an account{' '}
                <Link
                    href="/auth/register/"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Register Here
                </Link>{" "}
            </p>
        </div>

    )
}