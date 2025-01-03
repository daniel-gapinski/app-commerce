
import Product from "@/components/Product";
import Pagina from "@/components/template/Pagina";
import { ProductType } from "@/types/ProductType";
import Stripe from 'stripe';

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
  });

  const products = await stripe.products.list();
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id
      });
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: price.data[0].unit_amount,
        image: product.images[0],
        currency: price.data[0].currency,
      }
    })
  )
  return formatedProducts
}

export default async function Home() {

  const products = await getProducts();
  //console.log(products)

  return (
    <Pagina>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-6 p-3">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>

    </Pagina>
  );
}
