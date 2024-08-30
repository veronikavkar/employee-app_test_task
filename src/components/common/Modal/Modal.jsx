import ReactDOM from "react-dom";
import { BsX } from "react-icons/bs";
import "./ModalStyle.scss";
const Modal = ({ text, onModalClose, submit, btnText }) => {
  const onOverlayClick = () => {
    onModalClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={onOverlayClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <p className="title">{text}</p>
          <button className="button" onClick={onModalClose}>
            <span>
              <BsX />
            </span>
          </button>
        </div>
        <div className="buttons">
          <button type="button" className="modal-btn submit" onClick={submit}>
            {btnText}
          </button>

          <button className="modal-btn" onClick={onModalClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
