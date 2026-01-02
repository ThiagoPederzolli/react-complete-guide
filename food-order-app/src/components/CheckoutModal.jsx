import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CheckoutForm from './CheckoutForm';
import Submitted from './Submitted';

const CheckoutModal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();
  const [formKey, setFormKey] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(false);
  }

  function handleSuccessfulSubmit() {
    
    setFormKey(prev => prev + 1);
    setIsSubmitted(true);

  }

  function handleDialogClose() {
    setFormKey(prev => prev + 1);
    setIsSubmitted(false);
  }

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={handleDialogClose}>
      {isSubmitted ? (
        <Submitted onCloseModal={handleClose} />
      ): (
        <>
          <h2>{title}</h2>
          <CheckoutForm key={formKey} onCloseModal={handleClose} onSuccess={handleSuccessfulSubmit} />
        </>
      )}
    </dialog>,
    document.getElementById('modal')
  );
});

export default CheckoutModal;