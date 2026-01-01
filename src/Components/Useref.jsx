import React, { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.style.color = "green" // access the input element
    inputRef.current.style.backgroundColor = "red"
  };

  return (
    <div>
      <h1>(2).useref hook</h1>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
export default UseRefExample;

