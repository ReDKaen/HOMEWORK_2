import "./ModalCloseStyle.scss"
export default function ModalClose({onClick}){
    return(
        <>
            <span className="modal-close" onClick={onClick}>
                &times;
            </span>
        </>
    )
}