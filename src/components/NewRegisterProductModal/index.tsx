import Modal from 'react-modal'

interface newRegisterNewProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewRegisterProductModal( {isOpen, onRequestClose}: newRegisterNewProductModalProps ){
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}>
                
        <h2>meu modal!</h2>
      </Modal>
    )
}