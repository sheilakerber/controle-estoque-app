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

Modal.setAppElement("#root");

export function App() {
  // modal CADASTRAR PRODUTO
  const [isRegisterProductModalOpen, setIsRegisterProductModalOpen] =
    useState(false);

  // modal EDITAR PRODUTO
  const [isNewEditProductModalOpen, setIsNewEditProductModalOpen] =
    useState(false);

  return (
    <ProductsProvider>
      <Header />
      <Dashboard />
      <ProductManager
        onOpenRegisterProductModal={() => setIsRegisterProductModalOpen(true)}
        onOpenEditProductModal={() => setIsNewEditProductModalOpen(true)}
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
