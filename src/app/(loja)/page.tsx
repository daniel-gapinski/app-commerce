
import Product from "@/components/Product";
import Pagina from "@/components/template/Pagina";
import { ProductType } from "@/types/ProductType";

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) {
        throw new Error("Falha ao buscaer produtos");

    }
    return res.json();
}

export default async function Home() {

  const products = await getProducts();
  console.log(products)

  return (
    <Pagina>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-6 p-3">
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product}></Product>
      ))}
      </div>
     
    </Pagina>
  );
}
