'use client';

import Pagina from "@/components/template/Pagina";
import useCart from "@/hooks/useCart";

export default function Home() {

  const { numero } = useCart();

  return (
    <Pagina>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-6 p-3">
        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>

        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>

        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>

        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>

        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>

        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>

        <div className="bg-blue-500 rounded shadow-lg overflow-hidden p-2">
          Prod 1
        </div>
      </div>
    </Pagina>
  );
}
