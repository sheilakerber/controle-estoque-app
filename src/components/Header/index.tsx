import logoImg from '../../assets/icon.jpg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo Sistema Controle de Estoque" />
                <h1>SISTEMA DE CONTROLE DE ESTOQUE </h1>
            </Content>
        </Container>
    )
}