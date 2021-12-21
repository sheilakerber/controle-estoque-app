import { Container } from "./styles";
import inImg from "../../assets/in.jpg"
import outImg from "../../assets/out.jpg"
import stockImg from "../../assets/icon.jpg"


export function Dashboard(){
    return (
        <Container>
            
            <h1>Produto: Arroz 5kg</h1>
            
            <div className="dashboardDiv">
                <section className="infosProduct">
                    <header>
                        <h2>Entradas</h2>
                        <img src={inImg} alt="Icone de entrada"  />
                    </header>
                    <strong>100 un</strong>
                </section>

                <section className="infosProduct">
                    <header>
                        <h2>Saídas</h2>
                        <img src={outImg} alt="Icone de entrada"  />
                    </header>
                    <strong>80 un</strong>
                </section>

                <section className="infosProduct">
                <header>
                    <h2>Total em estoque</h2>
                    <img src={stockImg} alt="Icone de entrada" />
                    </header>
                    <strong>20 un</strong>
                </section>

            </div>
            



        </Container>
    )
}