import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignRight, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function HeaderMobile() {
    return (
        <header className="block md:hidden w-full border-b border-gray-200">
            <div className="w-full flex justify-between py-3.5 px-4">

                <h2 className="text-sm">AppCommerce</h2>

                <Sheet>
                    <SheetTrigger><AlignRight size={16} /></SheetTrigger>
                    <SheetContent className="w-[300px]" side="left">
                        <nav className='grid gap-6 text-sm mt-7 p-2'>

                            <Link href="#" className="flex gap-4">
                                <Home size={16} />
                                <h2 className="text-sm">Página Inicial</h2>
                            </Link>

                            <Link href="#" className="flex gap-4">
                                <ShoppingCart size={16} />
                                <h2 className="text-sm">Carrinho</h2>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    )
}