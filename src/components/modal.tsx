const Modal = ({ onClose, closeBtnCls = "rightClose", content }) => {
  return (
    <>
      <div
        id="modal-content"
        className="fixed inset-0 z-50 bg-white w-fit h-fit justify-items-center m-[80px_auto_0_auto] p-4 rounded shadow-lg translate-y-[30px] animate-slideIn"
      >
        <div onClick={onClose} id="closeBtn" className={"ml-auto hover:bg-gray-100 "}>
          <div className="text-black mr-auto cursor-pointer px-2.5 py-1 rounded hover:bg-secondary">
            close
          </div>
        </div>
        <div id="main-content" className="w-auto h-auto overflow-y-auto">{content}</div>
      </div>
      <div
        onClick={onClose}
        id="modal-bg-screen"
        className="fixed inset-0 w-screen h-screen z-40 bg-gray-300 blur-[1000px] cursor-pointer"
      />
    </>
  );
};
export default Modal;
