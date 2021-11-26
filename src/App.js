import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [texts, setText] = useState([])
  const [count, setCount] = useState(1)


 const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    const newData = data.slice(0, amount)
    setText(newData);
  };

  return (
  <>
    <section className = "section-center">
      <h3>lorem generator</h3>
      <form className =" lorem-form" onSubmit = {handleSubmit}>
        <label htmlFor = "num">
          Paragraph
        </label>
        <input type = "number"  name = "num" value = {count} onChange ={(e) => {setCount(e.target.value)}}></input>
        <button className = "btn">generator</button>
      </form>
      <div className = "text">
        {texts.map((text, index) => {
          return <p key = {index}>{text}</p>
        }) }
        </div>

    </section>
  </>
    )
}

export default App;
