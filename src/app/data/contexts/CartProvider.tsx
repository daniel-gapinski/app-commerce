
import { createContext } from "react"

export const CartContext = createContext<any>(null)

export default function CartProvider(props: any) {

    return (
        <CartContext.Provider value={{
            numero: 1000,
        }}>{props.children}</CartContext.Provider>
    )
}