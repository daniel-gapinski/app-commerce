'use client';

import Pagina from "@/components/template/Pagina";
import { useCartStore } from "@/store";

export default function Cart() {

    const useStore = useCartStore();

    return (
        <Pagina>
            <div>
                <h2 className="text-sm uppercase py-3 w-full">Meu Carrinho</h2>
            </div>
            <div className="flex flex-col gap-3 p-7 rounded-xl w-full bg-red-500">
                {
                    useStore.cart.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </Pagina>
    )
}