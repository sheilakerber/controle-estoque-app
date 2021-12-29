import Modal from "react-modal";
import { Container } from "./styles";
import saveImg from "../../assets/save.jpg";
import cancelImg from "../../assets/cancel.jpg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useContext, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

interface NewRegisterNewProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRegisterProductModal({
  isOpen,
  onRequestClose,
}: NewRegisterNewProductModalProps) {
  const [product, setProduct] = useState("");

  const context = useContext(ProductsContext);

  function handleRegisterNewProduct(event: FormEvent) {
    event.preventDefault();

    if (context) {
      const newProductObject = {
        id: Math.floor(Math.random() * 10000),
        product,
      };

      const newProducts = [...context.products, newProductObject];
      context.setProducts(newProducts);
    }
    onRequestClose();
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
          required
        />

        <main>
          <div className="productInfo">
            <h3>Entrada</h3>
            <input type="number" name="" id="" required/> <br />
            <h3>Saída</h3>
            <input type="number" name="" id="" required/> <br />
            <h3>Total em estoque</h3>
            <input type="text" name="" id="" disabled /> <br />
          </div>
        </main>

        <div className="buttonsDiv">
          <button type="submit" id="saveBtn">
            <img src={saveImg} alt="" />
            Salvar
          </button>

          {/* <button type="submit" id="cancelBtn">
            <img src={cancelImg} alt="" />
            Cancelar
          </button> */}
        </div>
      </Container>
    </Modal>
  );
}
