import React, { useCallback, useState } from "react";

function Button({ onClick }) {
//   console.log("Button rendered");
  return <button onClick={onClick}>Click</button>;
}


const Usecallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
     <>
     <h2>(3).useCallback hook</h2>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </>
  )
}

export default Usecallback;