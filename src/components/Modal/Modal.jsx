import ModalWrapper from "./ModalWrapper/ModalWrapper";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalFooter from "./ModalFooter/ModalFooter";
import ModalClose from "./ModalClose/ModalClose";
import ModalBody from "./ModalBody/ModalBody";

export default function Modal({ children, onClose, headerText, firstText, secondaryText, firstClick, secondaryClick }) {
return (
    <>
        <div className="backdrop" onClick={onClose}></div>
        <ModalWrapper>
            <ModalClose onClick={onClose} />
            <ModalHeader>
                <h2>{headerText}</h2>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter
                firstText={firstText}
                firstClick={firstClick}
                secondaryText={secondaryText}
                secondaryClick={secondaryClick}
            />
        </ModalWrapper>
    </>
);
}