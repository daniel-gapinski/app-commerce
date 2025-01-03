'use client';

import useCart from "@/hooks/useCart";
import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";

export default function AddCart({ product }: { product: ProductType }) {

    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product)}
            className="bg-teal-600 p-2 rounded text-white text-[12px] text-center w-full">Adicionar ao Carrinho</button>
    )
}