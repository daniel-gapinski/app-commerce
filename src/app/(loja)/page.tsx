
import Pagina from "@/components/template/Pagina";
import { ProductType } from "@/types/ProductType";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  
  if(!res.ok) {
    throw new Error("Falha ao buscaer produtos");
    
  }
  return res.json();
}

export default async function Home() {

  const products = await getProducts();

  console.log(products);

  return (
    <Pagina>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-6 p-3">
        {products.map((product: ProductType) => (
          <div key={product.id} className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
            <div className="flex flex-col">
              <p>{product.title}</p>
            </div>
        </div>
        ))}
        
      </div>
    </Pagina>
  );
}
