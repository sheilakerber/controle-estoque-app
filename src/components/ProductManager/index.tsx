import { useContext } from "react";
import { Container } from "./styles";
import editProductImg from "../../assets/edit.png";
import registerProductImg from "../../assets/newProduct.png";
import lowStockImg from "../../assets/danger.jpg";
import { ProductsContext } from "../../ProductsContext";
import { Product } from "../../interfaces/Product";

interface ProductManagerProps {
  onOpenRegisterProductModal: () => void;
  onOpenEditProductModal: () => void;
  onProductSelected: (product: Product) => void;
}

export function ProductManager({
  onOpenRegisterProductModal,
  onOpenEditProductModal,
  onProductSelected,
}: ProductManagerProps) {
  const context = useContext(ProductsContext);

  const handleProductSelect = (event: any) => {
    const selectedProductName = event.target.value;

    if (context) {
      const { products } = context;
      const result = products.filter(
        (eachProduct) => eachProduct.productName === selectedProductName
      );

      if (result.length > 0) {
        onProductSelected(result[0]);
      }
    }
  };

  return (
    <Container>
      <div>
        <div className="selectProdut">
          <h1>Selecione o produto desejado</h1>
          <select id="productsDropdown" onChange={handleProductSelect}>
            {context?.products.map((item) => (
              <option value={item.productName} key={item.id}>
                {item.productName}
              </option>
            ))}
          </select>

          <button type="button" onClick={onOpenEditProductModal}>
            <h2>Editar produto</h2>
            <img src={editProductImg} alt="Imagem para Editar Produto" />
          </button>

          <button type="button" onClick={onOpenRegisterProductModal}>
            <h2>Cadastar produto</h2>
            <img src={registerProductImg} alt="Imagem para Editar Produto" />
          </button>
        </div>

        <div className="lowStockProducts">
          <section className="lowStockTitle">
            <main>
              <h1>Produtos com estoque baixo</h1>
              <strong>(Quantidade abaixo de 30 unidades.)</strong>
            </main>
            <img src={lowStockImg} alt="" />
          </section>

          <section className="lowStockSelection">
            <select name="" id="productsDropdown">
              <option value="">Feijão 1Kg</option>
              <option value="">Leite 1L</option>
            </select>

            <p>Em estoque: x unidades</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
