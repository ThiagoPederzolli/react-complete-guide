import { useState, useRef } from 'react';
export default function Player() {
  // Refs are a kind of special value that React manages for us
  // They can be used to hold references to DOM nodes or any other
  const inputRef = useRef(null);
  // you can connect the ref to an element via the `ref` prop
  // The main difference between refs and state is that updating a ref
  // the ref doesnt exist in the first render
  // does NOT cause a re-render of your component
  // if I replace the playerName for the ref value, the component would not update
  // also, refs are mutable, so you can change their value directly
  // and the change will be reflected in the `current` property
  // State:
  // - Causes component re-evaluation(re-execution) when changed,
  // - should be used for values that are directly reflected in the UI
  // - Should not be used for "behind the scenes" valuesthat have no direct UI impact
  // Ref:
  // - Does not cause component re-evaluation when changed
  // - can be used for any mutable value that needs to persist across renders
  // - commonly used for accessing DOM nodes or storing mutable values

  const [playerName, setPlayerName] = useState('');


  function handleSubmit() {
    // refs always will be an JS object with a `current` property
    // in the current that the real ref will be stored
    setPlayerName(inputRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input ref={inputRef} type="text"  />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
