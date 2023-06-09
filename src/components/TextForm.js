// hooks allows you to use class based components state feature in function based components

import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }

    const handleOnChange = (event) => {
        // console.log("On change ");
        setText(event.target.value)
        props.showAlert("Converted to Uppercase ", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase ", "success")
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared ", "success")
    }

    const countWords = () => {
        let list = text.trim().split(" ");
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i] !== "") {
                count++;
            }
        }
        return count;
    }

    const [text, setText] = useState('');
    // setText("Enter text here");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : '#042743', backgroundColor: props.mode === 'dark' ? "grey" : "white" }} id="myBox" rows="8" placeholder='Enter your text'></textarea>
                </div>
                <button className="btn btn-primary mx-1 " onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Your text summary</h2>
                {/* count the number of words and characters */}
                <p> {countWords()} words and {text.length} characters </p>
                <p> {0.008 * countWords()} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
