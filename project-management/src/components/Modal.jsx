import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Modal = forwardRef(function Modal({ children }, ref) {
    const modalRef = useRef(null);
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal();
        },
        close: () => {
            modalRef.current.close();
        }
    }));
    return createPortal(
        <dialog ref={modalRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" form className="mt-4 text-right">
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    )
})

export default Modal;