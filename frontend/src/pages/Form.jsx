import React , {useState} from 'react'
import "../styles/F.css"
function Form() {
    let [data , setData] = useState(0);
  return (
    <>
    <div>
        <input type="text" placeholder='Enter a Number: ' className='input' 
        onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
        }}
        />
        <br />
        <br />
        <button>Click</button>
        <br />
        <br />
        <h1>{data}</h1>
    </div>
    </>
  )
}

export default Form
