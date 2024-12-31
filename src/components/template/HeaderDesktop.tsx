import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function HeaderDesktop() {
    return (
        <header className="hidden md:block w-full scroll-px-24 border-b border-gray-200 ">
            <div className="w-full flex justify-between py-5 px-7">
                <Link href="/">
                    <h2 className="text-sm">AppCommerce</h2>
                </Link>
                <Link href="/cart">
                    <div className="relative flex items-center justify-center">
                        <ShoppingCart size={20} />
                        <div className="absolute -top-2 -right-2 flex justify-center items-center w-4 h-4 rounded-full bg-zinc-700 text-sm">
                            <span className="text-[10px] text-white">2</span>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )
}