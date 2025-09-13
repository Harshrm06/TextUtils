import React, { useState } from 'react'

export default function Textforms(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }

    const handleClearClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText =('');
        setText(newText)
        props.showAlert("Cleared Text!","success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied!","success")
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!","success")
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className = "container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1d1d1d':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summmary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Requires {0.008 * text.split(" ").length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
    
  )
}
