import Modal from 'react-modal'
import { Container } from './styles'
import saveImg from '../../assets/save.jpg'
import cancelImg from '../../assets/cancel.jpg'
import closeImg from "../../assets/close.svg"

interface newRegisterNewProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewRegisterProductModal( {isOpen, onRequestClose}: newRegisterNewProductModalProps ){
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
            className='react-modal-close'>
            <img src={closeImg} alt="Fechar modal" />
       </button>

            <Container>
                <h2>Cadastro de produto no sistema</h2>
                <input type="text" placeholder='Novo produto'/>
                <div className='buttonsDiv'>
                    <button type="submit" id="saveBtn" >
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
    )
}