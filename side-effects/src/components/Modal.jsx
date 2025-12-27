import {  useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open }) {
  const dialog = useRef();

  // useEffect can help you to synchornize
  // prop/state values to DOM APIs
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
      return;
    }
    dialog.current.close();
  }, [open]);
  
  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children: null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
