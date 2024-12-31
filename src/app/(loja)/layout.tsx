'use client';

import CartProvider from "../data/contexts/CartProvider";

export default function Layout(props: any) {
    return (
        <CartProvider>{props.children}</CartProvider>
    )
}