// hooks allows you to use class based components state feature in function based components

import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick  = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange  = (event) => {
        // console.log("On change ");
        setText(event.target.value)
    }

    const handleLoClick  = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState('');
    // setText("Enter text here");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8" placeholder='Enter your text'></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick = {handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleLoClick}> Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        {/* count the number of words and characters */}
        <p> {text.split(" ").length} words and {text.length} characters </p>  
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
