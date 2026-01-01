import React, { useState } from "react";

function Usable() {
  const [boxes, setBoxes] = useState(Array(9).fill("")); 
  const [tic, setTic] = useState("X"); 
  

  const handleClick = (inde) => {

   if (boxes[inde] !== "") {
      return; 
    }
    
    const newBoxes = [...boxes];
    newBoxes[inde] = tic;
    setBoxes(newBoxes);
    setTic(tic === "X" ? "O" : "X");
   const checkWinner = () => {
    const wincom = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of wincom) {
      const [a, b, c] = combo;
      if (
        boxes[a] &&
        boxes[a] === boxes[b] &&
        boxes[a] === boxes[c]
      ) {
        alert(`Player ${boxes[a]} wins.`);
        setBoxes(Array(9).fill(""));
        return;
      }
    }


    };
    checkWinner();


  };

  return (
    <>

     <h1 style={{textAlign:"center" , justifyContent: "center", borderBottom:"1px solid green"}}>Tic_Toe_Game</h1>
      <div
        style={{
          width: "240px",
          display: "grid",
          justifyContent: "center",
           gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
          margin: "50px auto",
        

        }}
        
      >
        
        {boxes.map((value, i) => (
          <button
            key={i}
            style={{
              width: "70px",
              height: "70px",
              fontSize: "35px",
              fontWeight: "bold",
              border: "2px solid black",
             
            }}
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
}

export default Usable;
