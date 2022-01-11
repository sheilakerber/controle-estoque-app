import { useContext, useEffect, useState } from "react";
import lowStockImg from "../../assets/danger.jpg";
import { Product } from "../../interfaces/Product";
import { ProductsContext } from "../../ProductsContext";
import { CommonSelect } from "../common/Select";
import { Container } from "./styles";

export function LowStockViewer() {
  const [selectedLowItem, setSelectedLowItem] = useState<Product | undefined>();

  const context = useContext(ProductsContext);

  let lowStockItems: Product[] = [];

  if (context) {
    const { products } = context;
    lowStockItems = products.filter((p) => p.balanceQuantity < 30);
  }

  const handleLowStockSelected = (event: any) => {
    const selectedItemName = event.target.value;
    const result = lowStockItems.filter(
      (i) => i.productName === selectedItemName
    );
    if (result.length > 0) setSelectedLowItem(result[0]);
  };

  useEffect(() => {
    if (lowStockItems.length === 1) setSelectedLowItem(lowStockItems[0]);
  }, [lowStockItems]);

  return (
    <Container>
      <div>
        <section className="lowStockTitle">
          <main>
            <h1>Produtos com estoque baixo</h1>
            <strong>(Quantidade abaixo de 30 unidades.)</strong>
          </main>
          <img src={lowStockImg} />
        </section>

        <section className="lowStockSelection">
          <CommonSelect onChange={handleLowStockSelected}>
            {lowStockItems.map((item) => (
              <option value={item.productName} key={item.id}>
                {item.productName}
              </option>
            ))}
          </CommonSelect>

          <p>Em estoque: {selectedLowItem?.balanceQuantity} </p>
        </section>
      </div>
    </Container>
  );
}
