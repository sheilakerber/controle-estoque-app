import Modal from 'react-modal'

interface newEditProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEditProductModal( {isOpen, onRequestClose}: newEditProductModalProps ) {
    return (
       <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
       >  
            <h2>modal EDITAR PRODUTO</h2>
       </Modal>
    )
}