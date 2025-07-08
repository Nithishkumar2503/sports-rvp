import "./modal.css";
const Modal = ({ onClose,closeBtnCls='rightClose',content }) => {
    return (
        <>
            <div id="modal-content">
                <div onClick={onClose} id="closeBtn" className={closeBtnCls}>
                    close
                </div>
                <div id="main-content">
                    {content}
                </div>
            </div>
            <div onClick={onClose} id="modal-bg-screen" />
        </>
    )
}
export default Modal