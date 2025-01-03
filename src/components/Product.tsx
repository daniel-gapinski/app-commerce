import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./AddCart";

type ProductProps = {
    product: ProductType
}

export default async function Product({ product }: ProductProps) {
    return (
        <div className="bg-gray-50 rounded shadow-lg p-5 h-96 overflow-hidden">

            <div className="relative flex h-72 max-h-72 flex-1">
                <ProductImage product={product} fill  />
            </div>
            <div className="flex justify-between text-sm">
                <p className="text-sm truncate w-40">{product.name}</p>
                <p className="text-sm">{formatPrice(product.price)}</p>
            </div>
            <div className="flex items-center justify-center w-full py-3">
                <AddCart product={product} />
            </div>

        </div>
    )
}