import React,{useState} from 'react'

export default function TextForms(props) {
  
    const handleUpClick=()=>{
        console.log("Uppercase was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
    }

     const handleLowerClick=()=>{
        console.log("Uppercase was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
     const handleCopyText=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

     const handleClearText=()=>{
        let newText="";
        setText(newText);
    }
     const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+ /);
        setText(newText.join(" "));
    }

     const handleOnChange=(event)=>{
        console.log("Onchange.");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text");
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control"value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success me-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-success me-1" onClick={handleLowerClick}>Convert to lowercase</button>
        <button className="btn btn-success me-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-success me-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-success me-1" onClick={handleExtraSpaces}>Remove Extra Spaces Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>your text summary</h2>
          <p>{text.split(" ").length} words,{text.length} character.</p>
          <p>{0.008 *text.split(" ").length } Minutes Read</p>
          <h2>Preview text</h2>
          <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>
        </div>
        </>
  )
}
