import styled from "styled-components";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ProductManager } from "./components/ProductManager";
import { GlobalStyle } from "./styles/globals";
import { useState } from "react";
import { NewRegisterProductModal } from "./components/NewRegisterProductModal";
import { NewEditProductModal } from "./components/NewEditProductModal";

Modal.setAppElement("#root");

export function App() {
  // modal CADASTRAR PRODUTO
  const [isRegisterProductModalOpen, setIsRegisterProductModalOpen] =
    useState(false);

  function handleOpenRegisterProductModal() {
    setIsRegisterProductModalOpen(true);
  }

  function handleCloseRegisterProductModal() {
    setIsRegisterProductModalOpen(false);
  }

  // modal EDITAR PRODUTO
  const [isNewEditProductModalOpen, setIsNewEditProductModalOpen] =
    useState(false);

  function handleOpenEditProductModal() {
    setIsNewEditProductModalOpen(true);
  }

  function handleCloseEditProductModal() {
    setIsNewEditProductModalOpen(false);
  }

  return (
    <>
      <Header />
      <Dashboard />
      <ProductManager
        onOpenRegisterProductModal={handleOpenRegisterProductModal}
        onOpenEditProductModal={handleOpenEditProductModal}
      />
      <NewRegisterProductModal
        isOpen={isRegisterProductModalOpen}
        onRequestClose={handleCloseRegisterProductModal}
      />
      <NewEditProductModal
        isOpen={isNewEditProductModalOpen}
        onRequestClose={handleCloseEditProductModal}
      />
      <GlobalStyle />
    </>
  );
}
