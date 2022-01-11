import Modal from "react-modal";
import { Container } from "./styles";
import saveImg from "../../assets/save.jpg";
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
  const [productName, setProductName] = useState("");
  const [incomeQuantity, setIncomeQuantity] = useState<number | undefined>();
  const [outcomeQuantity, setOutcomeQuantity] = useState<number | undefined>();

  const context = useContext(ProductsContext);

  const balanceQuantity =
    incomeQuantity && outcomeQuantity
      ? incomeQuantity - outcomeQuantity
      : undefined;

  function handleRegisterNewProduct(event: FormEvent) {
    event.preventDefault();

    if (context) {
      if (incomeQuantity && outcomeQuantity && balanceQuantity) {
        const newProductObject = {
          id: Math.floor(Math.random() * 10000),
          productName,
          incomeQuantity,
          outcomeQuantity,
          balanceQuantity,
        };

        if (newProductObject.balanceQuantity < 0) {
          alert(
            "ATENÇÃO: A quantidade de saídas não pode ser maior que a quantidade de entradas!"
          );
          return;
        } else {
          const newProducts = [...context.products, newProductObject];
          context.setProducts(newProducts);
          onRequestClose();
        }
      }
    }
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
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          required
        />

        <main>
          <div className="productInfo">
            <h3>Entrada</h3>
            <input
              type="number"
              id="incomeValue"
              value={incomeQuantity}
              onChange={(event) =>
                setIncomeQuantity(Number(event.target.value))
              }
              required
            />{" "}
            <br />
            <h3>Saída</h3>
            <input
              type="number"
              id="outcomeValue"
              value={outcomeQuantity}
              onChange={(event) =>
                setOutcomeQuantity(Number(event.target.value))
              }
              required
            />{" "}
            <br />
            <h3>Total em estoque</h3>
            <input
              type="text"
              id="balanceValue"
              value={balanceQuantity}
              disabled
            />{" "}
            <br />
          </div>
        </main>

        <div className="buttonsDiv">
          <button type="submit" id="saveBtn">
            <img src={saveImg} alt="" />
            Salvar
          </button>
        </div>
      </Container>
    </Modal>
  );
}
