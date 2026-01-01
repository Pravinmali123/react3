import React, { useState } from "react";



export default function ImageButtons() {
  const [image, setImage] = useState("");

  return (
    
    <div style={{ width: "400px", margin: "30px auto", textAlign: "center" }}>
     

    
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
        <button onClick={() => setImage("https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600")}>Animal</button>

        <button onClick={() => setImage("https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600")}>Nature</button>

        <button onClick={() => setImage("https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600")}>Car</button>

        <button onClick={() => setImage("https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600")}>Food</button>

        <button onClick={() => setImage("https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600")}>Tech</button>
      </div>

     
       
          <img src={image} alt={image} style={{ width: "100%", height: "230px", objectFit: "cover" }} />
        
    </div>
  );
}
