import styled from "styled-components";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ProductManager } from "./components/ProductManager";
import { GlobalStyle } from "./styles/globals";
import { useState } from "react";
import { NewRegisterProductModal } from "./components/NewRegisterProductModal";
import { NewEditProductModal } from "./components/NewEditProductModal";
import { ProductsProvider } from "./ProductsContext";
import { Product } from "./interfaces/Product";

Modal.setAppElement("#root");

export function App() {
  // modal CADASTRAR PRODUTO
  const [isRegisterProductModalOpen, setIsRegisterProductModalOpen] =
    useState(false);

  // modal EDITAR PRODUTO
  const [isNewEditProductModalOpen, setIsNewEditProductModalOpen] =
    useState(false);

  // estado para salvar o produto selecionado
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  return (
    <ProductsProvider>
      <Header />
      <Dashboard selectedProduct={selectedProduct} />
      <ProductManager
        onOpenRegisterProductModal={() => setIsRegisterProductModalOpen(true)}
        onOpenEditProductModal={() => setIsNewEditProductModalOpen(true)}
        // ao passar o set do estado diretamente,
        // o React entende que o setSelectedProduct ira ser chamado com um produto e 
        // vai setar esse produto no estado acima, ex: 
        // onProductSelected={(product: Product) => setSelectedProduct(product)}
        onProductSelected={setSelectedProduct}
      />
      <NewRegisterProductModal
        isOpen={isRegisterProductModalOpen}
        onRequestClose={() => setIsRegisterProductModalOpen(false)}
      />
      <NewEditProductModal
        isOpen={isNewEditProductModalOpen}
        onRequestClose={() => setIsNewEditProductModalOpen(false)}
      />
      <GlobalStyle />
    </ProductsProvider>
  );
}
