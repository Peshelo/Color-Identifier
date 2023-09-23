import {useState} from 'react'
import Square from './Square';
import InputColor from './InputColor';

function App() {
  const [color,setColor] = useState('');

  const handleColorChange = (color)=>{
    setColor(color);
  }

  return (
    <div className="App">
      <Square color={color}/>
      <InputColor 
        color={color}
        handleColorChange={handleColorChange}
      />
    </div>
  );
}

export default App;
