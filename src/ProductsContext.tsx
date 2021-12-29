import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export interface Product {
  id: number;
  product: string;
}

interface ProductsProviderProps {
  children: ReactNode;
}

type SetProductType = React.Dispatch<React.SetStateAction< Product[]>>

export const ProductsContext = createContext<null | { setProducts: SetProductType, products: Product[] }>(null)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setProducts(response.data.products));
  }, []);

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
}
