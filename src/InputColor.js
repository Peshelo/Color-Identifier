import React from 'react'

const InputColor = ({color,handleColorChange}) => {
  return (
    <input style={{
        maxWidth:"200px",
       padding: "10px",
       fontSize:"20px",
       borderRadius: "5px",
       border:"1px solid gray"
     }} type="text" placeholder="Enter color name..." value={color}
     onChange={(e)=>handleColorChange(e.target.value)}
     />
  )
}

export default InputColor