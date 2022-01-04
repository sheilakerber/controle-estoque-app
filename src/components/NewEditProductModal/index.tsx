import Modal from "react-modal";
import { Container } from "./styles";
import saveImg from "../../assets/save.jpg";
import cancelImg from "../../assets/cancel.jpg";
import deleteImg from "../../assets/delete.png";
import closeImg from "../../assets/close.svg";
import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import { Product } from "../../interfaces/Product";
import { useEffect, useState } from "react";

interface NewEditProductModalProps {
  isOpen: boolean;
  selectedProduct: Product | undefined;
  onRequestClose: () => void;
}

export function NewEditProductModal({
  isOpen,
  onRequestClose,
  selectedProduct,
}: NewEditProductModalProps) {
  const context = useContext(ProductsContext);

  let productName = "Produto nao selecionado";
  let income = 200;
  let outcome = 0;
  
  if (selectedProduct) {
    productName = selectedProduct.productName;
    income = selectedProduct.incomeQuantity;
    outcome = selectedProduct.outcomeQuantity;
  }

  // estados temporarios para as variaveis em edicao
  const [incomeEdition, setIncomeEdition] = useState(income);
  const [outcomeEdition, setOutcomeEdition] = useState(outcome);

  useEffect(() => {
    setIncomeEdition(income);
    setOutcomeEdition(outcome);
  }, [income, outcome]);

  const balance = incomeEdition - outcomeEdition

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

      <Container>
        <header>
          <h2>Editar produto</h2>
          <input type="text" placeholder={productName} disabled />
        </header>

        <main>
          <div className="productEdition productInfo">
            <h3>Entrada</h3>
            <input
              type="number"
              value={incomeEdition}
              onChange={(e) => setIncomeEdition(Number(e.target.value))}
            />{" "}
            <br />
            <h3>Saída</h3>
            <input
              type="number"
              value={outcomeEdition}
              onChange={(e) => setOutcomeEdition(Number(e.target.value))}
            />{" "}
            <br />
            <h3>Total em estoque</h3>
            <input value={balance}  disabled /> <br />
          </div>

          <div className="productEdition buttonsEdition">
            <button type="submit" id="saveEditionButton">
              <img src={saveImg} alt="" />
              Salvar
            </button>

            <button type="submit" id="cancelEditionButton">
              <img src={cancelImg} alt="" />
              Cancelar
            </button>

            <button type="submit" id="deleteEditionButton">
              <img src={deleteImg} alt="" />
              Excluir
            </button>
          </div>
        </main>
      </Container>
    </Modal>
  );
}
