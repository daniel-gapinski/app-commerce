'use client';

import Pagina from "@/components/template/Pagina";
import useCart from "@/hooks/useCart";


export default function Cart() {

    const { numero } = useCart();

    return (
        <Pagina>
            <div>carrinho: {numero}</div>
        </Pagina>
    )
}