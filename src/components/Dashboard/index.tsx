import { Container } from "./styles";
import inImg from "../../assets/in.jpg";
import outImg from "../../assets/out.jpg";
import stockImg from "../../assets/icon.jpg";
import { Product } from "../../interfaces/Product";

interface DashboardProps {
  selectedProduct: Product | undefined;
}

export function Dashboard({ selectedProduct }: DashboardProps) {
  let name = "Selecione um produto";
  let income = "";
  let outcome = "";
  let balance = "";

  if (selectedProduct) {
    const { productName, incomeQuantity, outcomeQuantity, balanceQuantity } =
      selectedProduct;

    name = productName;
    income = `${incomeQuantity} un`;
    outcome = `${outcomeQuantity} un`;
    balance = `${balanceQuantity} un`;
  }

  return (
    <Container>
      <h1>{name}</h1>

      <div className="dashboardDiv">
        <section className="infosProduct">
          <header>
            <h2>Entradas</h2>
            <img src={inImg} alt="Icone de entrada" />
          </header>
          <strong>{income}</strong>
        </section>

        <section className="infosProduct">
          <header>
            <h2>Saídas</h2>
            <img src={outImg} alt="Icone de entrada" />
          </header>
          <strong>{outcome}</strong>
        </section>

        <section className="infosProduct">
          <header>
            <h2>Total em estoque</h2>
            <img src={stockImg} alt="Icone de entrada" />
          </header>
          <strong>{balance}</strong>
        </section>
      </div>
    </Container>
  );
}
