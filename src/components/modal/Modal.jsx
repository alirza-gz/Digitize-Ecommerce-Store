import { useLockBodyScroll } from "@uidotdev/usehooks";
import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Backdrop({ onClose }) {
  useLockBodyScroll();

  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-full bg-slate-100/70 md:hidden"
      onClick={onClose}
    ></div>
  );
}

function ModalOverlay({ children, showModal }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0
       z-50 ${
         showModal ? "translate-y-0" : "translate-y-full"
       } rounded-tl-3xl rounded-tr-3xl h-3/6 overflow-auto bg-white p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] transition-all duration-300
         md:hidden
       `}
    >
      {children}
    </div>
  );
}

function Modal({ onClose, children }) {
  const portalElement = document.getElementById("overlays");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, [showModal]);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay showModal={showModal}>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
