'use client';

import { ReactNode, useState, useEffect } from "react";
import Pagina from "./template/Pagina";

export default function Hydrate({ children }: { children: ReactNode }) {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return isMounted ? <>{children}</> : 
    <Pagina>
        <div className="w-full h-full flex justify-center items-center">
            <h2>Carregando...</h2>
        </div>
    </Pagina>;
}