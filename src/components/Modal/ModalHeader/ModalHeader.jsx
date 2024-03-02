import "./ModalHeaderStyle.scss"
export default function ModalHeader({children}){
    return(
        <>
            <div className="modal-header">{children}</div>
        </>
    )
}