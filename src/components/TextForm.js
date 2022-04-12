import React, {useState} from 'react'

function TextForm(props) {

    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);   // remember it.
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        alert("Text Copied");
        }

    const [text, setText]= useState('');
            // text=["check text"];                 //this is a wrong method to change the value of text bz we use function.
            // setText("new text");                    // correct way to change the text

    return (
        <>
        <div className="container">
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>COPY TEXT</button>
        </div>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        </div>
        </>
    )
}

export default TextForm
