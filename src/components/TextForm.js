// hooks allows you to use class based components state feature in function based components

import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase ", "success")
        
    }

    // needed to keep track of the changing text with each character entered
    const handleOnChange = (event) => {
        // console.log("On change ");
        setText(event.target.value)
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
        let list = text.trim().split("\n");
        console.log(list);
        let count = 0;
        for(let li of list)
        {
            let list1 = li.trim().split(" ");
            for (let i = 0; i < list1.length; i++) {
                if (list1[i] !== "") {
                    count++;
                }
            }
        }      
        return count;
    }

    const [text, setText] = useState('');
    // setText("Enter text here");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className = "mb-3"> <strong>{props.heading}</strong></h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color: props.mode === 'blue' ? 'white' : 'black', backgroundColor: props.mode === 'blue' ? "grey" : "white" }} id="myBox" rows="8" placeholder='Enter your text'></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                {/* count the number of words and characters */}
                <p> {countWords()} words and {text.length} characters </p>
                <p> {0.008 * countWords()} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Entered text will appear here !"}</p>
            </div>
        </>
    )
}
