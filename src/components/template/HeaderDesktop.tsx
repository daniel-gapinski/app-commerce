import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import CartIcon from "../CartIcon";

export default function HeaderDesktop() {
    return (
        <header className="hidden md:block w-full scroll-px-24 border-b border-gray-200 ">
            <div className="w-full flex items-center justify-between py-5 px-7">
                <Link href="/">
                    <h2 className="text-sm">AppCommerce</h2>
                </Link>
                <div className="flex flex-row gap-7 items-center">
                    <Link href="/cart">
                        <CartIcon />
                    </Link>
                    <div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="text-sm">Login</button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </header>
    )
}