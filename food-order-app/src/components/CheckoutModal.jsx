import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CheckoutForm from './CheckoutForm';

const CheckoutModal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();
  const [formKey, setFormKey] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      }
    };
  });

  function handleClose() {
    setFormKey(prev => prev + 1);
    dialog.current.close();
  }

  function handleSuccessfulSubmit() {
    
    setFormKey(prev => prev + 1);
    dialog.current.close();
  }

  function handleDialogClose() {
    setFormKey(prev => prev + 1); 
  }

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={handleDialogClose}>
      <h2>{title}</h2>
      <CheckoutForm key={formKey} onCloseModal={handleClose} onSuccess={handleSuccessfulSubmit} />
    </dialog>,
    document.getElementById('modal')
  );
});

export default CheckoutModal;