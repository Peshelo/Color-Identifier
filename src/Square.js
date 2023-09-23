import React from 'react'

const Square = ({color}) => {
  return (
    <div style={{
        maxWidth:"200px",
        padding:'50px',
        margin:"5px 0",
        border: "2px solid black",
        textAlign:"center",
        borderRadius:"5px",
        fontSize: "20px",
        fontWeight:"bold",
        backgroundColor:`${color}`,
       
      }}>{color ? `${color}` : "Empty Value"}</div>
  )
}

export default Square