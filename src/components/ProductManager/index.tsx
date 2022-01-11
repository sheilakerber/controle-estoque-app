import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import editProductImg from "../../assets/edit.png";
import registerProductImg from "../../assets/newProduct.png";
import { ProductsContext } from "../../ProductsContext";
import { Product } from "../../interfaces/Product";
import { LowStockViewer } from "../LowStockViewer";

interface ProductManagerProps {
  onOpenRegisterProductModal: () => void;
  onOpenEditProductModal: () => void;
  onProductSelected: (product: Product) => void;
}

export function ProductManager({
  onOpenRegisterProductModal,
  onOpenEditProductModal,
  onProductSelected,
}: ProductManagerProps) {
  const context = useContext(ProductsContext);

  const handleProductSelect = (event: any) => {
    const selectedProductName = event.target.value;

    if (context) {
      const { products } = context;
      const result = products.filter(
        (eachProduct) => eachProduct.productName === selectedProductName
      );

      if (result.length > 0) {
        onProductSelected(result[0]);
      }
    }
  };

  return (
    <Container>
      <div>
        <div className="selectProdut">
          <h1>Selecione o produto desejado</h1>
          <select id="productsDropdown" onChange={handleProductSelect}>
            {context?.products.map((item) => (
              <option value={item.productName} key={item.id}>
                {item.productName}
              </option>
            ))}
          </select>

          <button type="button" onClick={onOpenEditProductModal}>
            <h2>Editar produto</h2>
            <img src={editProductImg} alt="Imagem para Editar Produto" />
          </button>

          <button type="button" onClick={onOpenRegisterProductModal}>
            <h2>Cadastar produto</h2>
            <img src={registerProductImg} alt="Imagem para Editar Produto" />
          </button>
        </div>
      </div>
      
    </Container>
  );
}
