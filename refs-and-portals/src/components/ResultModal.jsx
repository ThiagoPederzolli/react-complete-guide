import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(
    function ResultModal({ result, targetTime, onReset }, ref) {
        // const userLost = result <= 0;
        const formattedResult = (result / 1000).toFixed(2);
        const score = Math.round((1 - result / (targetTime * 1000)) * 100)
        const dialog = useRef(null);
        useImperativeHandle(ref, () => ({
            showModal: () => {
                dialog.current.showModal();
            },
            })
        );
  return createPortal(
    <dialog ref={dialog} className="result-modal">
        <h2>{result > 0 ? `Your Score: ${score}` : 'You Lost'}</h2>
        <p>Target time: {targetTime} seconds</p>
        <p>you stopped the timer with <strong>{formattedResult} seconds left</strong></p>
        <form method='dialog'>
            <button onClick={onReset}>Close</button>
        </form>
    </dialog>, document.getElementById('modal')
  );
});


// the code below is the same as above but without using forwardRef
// and only works on React 19 and above;
// function ResultModal({ result, targetTime, ref }) {
//   return (
//     <dialog ref={ref} className="result-modal">
//         <h2>Your Score: {result} | You Lost</h2>
//         <p>Target time: {targetTime} seconds</p>
//         <p>you stopped the timer with<strong>X seconds left</strong></p>
//         <form method='dialog'>
//             <button>Close</button>
//         </form>
//     </dialog>
//   );
// }

export default ResultModal;
