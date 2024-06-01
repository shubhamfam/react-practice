import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    
    const handleClose = () => {
        setShowModal(false);
    };
    
    const handleClick = () => {
        setShowModal(true)
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an agreement for you to accept.</p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
};
