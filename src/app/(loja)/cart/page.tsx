'use client';

import Pagina from "@/components/template/Pagina";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {

    const useStore = useCartStore();

    return (
        <Pagina>
            <div className="flex flex-row items-center">
                <Link href={"/"}>
                    <div className="py-3 flex flex-row gap-2 items-center">
                        <ArrowLeft className="text-teal-600" size={16} />
                        <button className="text-teal-600 text-sm">Voltar para a loja</button>
                    </div>
                </Link>
            </div>
            <div>
                <h2 className="text-sm uppercase py-3 w-full">Meu Carrinho</h2>
            </div>
            <div className="flex flex-col gap-3 p-7 rounded-xl w-full">
                {
                    useStore.cart.map((item) => (
                        <div key={item.id} className="flex justify-between border-b">
                            <div className="flex gap-4 py-4 ">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                                <div className="flex flex-col gap-2 ">
                                    <h2 className="text-sm w-32 truncate">{item.name}</h2>
                                    <span className="text-teal-700">{formatPrice(item.price)}</span>
                                    <p className="text-sm w-42 truncate">Quantidade: {item.quantity}</p>
                                    <div className="flex gap-2 text-sm mt-2">
                                        <button onClick={() => useStore.addProduct(item)}>Adicionar</button>
                                        <button onClick={() => useStore.removeProduct(item)}>Remover</button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => useStore.removeAll(item)}><X size={16} /></button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </Pagina>
    )
}