import styled from 'styled-components'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { ProductManager } from './components/ProductManager';
import { GlobalStyle } from './styles/globals';
import { useState } from 'react';

Modal.setAppElement('#root');

export function App() {

  // modal CADASTRAR PRODUTO
  const [isRegisterProductModalOpen, setIsRegisterProductModalOpen] = useState(false)

    function handleOpenRegisterProductModal() {
        setIsRegisterProductModalOpen(true)
    }

    function handleCloseRegisterProductModal() {
        setIsRegisterProductModalOpen(false)
    }


  return (
    <>
      <Header/>
      
      <Dashboard/>
      <ProductManager onOpenRegisterProductModal={handleOpenRegisterProductModal} />

      <Modal
        isOpen={isRegisterProductModalOpen}
        onRequestClose={handleCloseRegisterProductModal}>
                
        <h2>meu modal!</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}