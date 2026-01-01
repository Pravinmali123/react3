import React, { useState } from "react";
function CrudApp() {
  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [list, setlist] = useState([])
  const [edit, setedit] = useState(null)

  const handleclick = ()=>{
     
          if(edit != null)
        {
            let copy = [...list]
          copy[edit] = { name, surname }
          setlist(copy)
          setedit(null)
        }
        else{
          setlist([...list , {name , surname}])
        }
        setname('')
        setsurname('')
  }
  const daletedata = (index)=>{
    let copy = [...list]
     copy.splice(index,1)
     setlist(copy)
  
  }
   const editdata = (data,index)=>{
    setname(data.name)
    setsurname(data.surname)
    setedit(index)
   }
  

  return (
   <div style={{margin:"50px"}}> 
  <h1 style={{textAlign:"center" , justifyContent: "center", borderBottom:"1px solid green"}}>CRUD opration</h1>
  
   <input type="text" value={name} placeholder="name" onChange={(e)=>setname(e.target.value)}/> <br /><br />
   <input type="text" value={surname} placeholder="surname" onChange={(e)=>setsurname(e.target.value)}/> <br /> <br />
   <button onClick={handleclick}>Submit</button>

     <table border={1}>
            <tr>
                  <td>name</td>
                  <td>surname</td>
            </tr>
            {
                list.map(( i ,index) => (
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.surname}</td>
                        <td><button onClick={()=>daletedata(index)}>Delete</button></td>
                        <td><button onClick={()=>editdata(i,index)}>Edit</button></td>
                    </tr>
                ))
            }
          </table>
   </div>

 
   
  );
}

export default CrudApp;
