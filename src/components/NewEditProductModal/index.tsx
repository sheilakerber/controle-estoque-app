import Modal from 'react-modal'
import { Container } from './styles'
import saveImg from '../../assets/save.jpg'
import cancelImg from '../../assets/cancel.jpg'
import deleteImg from '../../assets/delete.png'
import closeImg from "../../assets/close.svg"

interface newEditProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEditProductModal( {isOpen, onRequestClose}: newEditProductModalProps ) {
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
                <header>
                    <h2>Editar produto</h2>
                    <input type="text" placeholder='produto selecionado' disabled/>
                </header>
                
                
                <main>
                    <div className="productEdition productInfo">
                        <h3>Entrada</h3>
                        <input type="text" name="" id="" /> <br />

                        <h3>Saída</h3>
                        <input type="text" name="" id="" /> <br />

                        <h3>Total em estoque</h3>
                        <input type="text" name="" id="" disabled/> <br />
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
    )
}