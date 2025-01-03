'use client';
import { useCartStore } from "@/store";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
    const useStore = useCartStore();

    return (
        <div className="relative flex items-center justify-center">
            <ShoppingCart size={20} />
            <div className="absolute -top-2 -right-2 flex justify-center items-center w-4 h-4 rounded-full bg-zinc-700 text-sm">
                <span className="text-[10px] text-white">{useStore.cart?.length}</span>
            </div>
        </div>
    )
}