import Modal from "react-modal";
import { Container } from "./styles";
import saveImg from "../../assets/save.jpg";
import cancelImg from "../../assets/cancel.jpg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../services/api";

interface NewRegisterNewProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Product {
  id: number;
  product: string;
}

export function NewRegisterProductModal({
  isOpen,
  onRequestClose,
}: NewRegisterNewProductModalProps) {
  const [product, setProduct] = useState("");

  function handleRegisterNewProduct(event: FormEvent) {
    event.preventDefault();
    const data = {
      product,
    };

    api.post("/products", data);
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleRegisterNewProduct}>
        <h2>Cadastro de produto no sistema</h2>
        <input
          type="text"
          placeholder="Novo produto"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        />
        <div className="buttonsDiv">
          <button type="submit" id="saveBtn">
            <img src={saveImg} alt="" />
            Salvar
          </button>

          <button type="submit" id="cancelBtn">
            <img src={cancelImg} alt="" />
            Cancelar
          </button>
        </div>
      </Container>
    </Modal>
  );
}
