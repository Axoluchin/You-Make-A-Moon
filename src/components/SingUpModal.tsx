import { Modal, Text, Input, Button, Row, Spacer } from "@nextui-org/react";
import { useSingUpModal } from "../hooks/Store";

const SingUpModal = () => {
  const { isOpen, onClose } = useSingUpModal((state) => ({
    isOpen: state.isOpen,
    onClose: state.closeModal,
  }));
  return (
    <Modal open={isOpen} onClose={onClose} closeButton style={{
        padding: '1rem'
    }}>
      <Text h3>Sing Up</Text>
      <Input bordered aria-label="email" placeholder="e-mail" />
      <Spacer y={1}/>
      <Input bordered aria-label="password" placeholder="Constraseña" />
      <Spacer y={1}/>
      <Row justify="space-between">
        <Button auto flat color="error" onClick={onClose}>Close</Button>
        <Button auto>Register</Button>
      </Row>
    </Modal>
  );
};

export default SingUpModal
