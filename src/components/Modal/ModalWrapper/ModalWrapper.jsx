import "./ModalWrapperStyle.scss"
export default function ModalWrapper({children}){
    return(
        <>
            <div className="modal-wrapper">
                {children}
            </div>
        </>
    )
}