import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // const [remainingTime, setRemainigTime] = useState(TIMER);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRemainigTime(prevTime => prevTime - 10);
  //   }, 10)

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, []);
  // just do that will cause some problems
  // because the DeleteConfirmation is always rendered,
  // although isnt always visible
  // one workaround will be render DeleteConfirmation conditionaly
  // setTimeout(() => {
  //   onConfirm();
  // }, 3000)
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    }
    // When adding a function as a dependency
    // there is a dangerous of create a infinity loop
    // because when you add a dependency, you are telling to React
    // that the useEffect should reexecute whenever the dependency value change
    // and functions, although have the code that nevers change
    // they are JS Objects that are recreated everytime that the component is rendered
  // }, [onConfirm]);
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
