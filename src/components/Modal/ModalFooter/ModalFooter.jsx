import Button from "../../Button/Button"
import "./ModalFooterStyle.scss"
export default function ModalFooter({firstClick, secondaryClick, firstText, secondaryText,}){
    return(
        <div className="modal-footer-wrapper">
            <Button
                onClick={firstClick}
                classNames="first-modal-button"
            >
                {firstText}
            </Button> 
            {secondaryText &&
                <Button
                    onClick={secondaryClick}
                    classNames="second-modal-button"
                >
                    {secondaryText}
                </Button>
            }
        </div>
    )
}