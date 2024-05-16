import React,{useState} from 'react'

export default function Textform(props) {

    const textchange = (event)=>{
        settext(event.target.value)
    }
    const clicked = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to UpperCase!","success")
    }
    const clickedlower = ()=>{
        let newtext = text.toLocaleLowerCase();
        settext(newtext);
        props.showAlert("Converted to lowerCase!","success")
    }
    const clickedclear = ()=>{
        let newtext = '';
        settext(newtext);
        props.showAlert("Text Cleared!","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Your Text Will Be Converted To Voice","success")
      }
    const[text,settext] = useState('')
    const wordCount = text.trim() === '' ? 0 : text.trim().split(" ").length;
  return (
    <>
   <div>
<div className="container" style = {{color:props.mode === 'dark'? 'white':'black'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={textchange} style = {{backgroundColor:props.mode === 'dark'? '#CCCCCC':'white' ,color:props.mode === 'dark'?'white':'black'}}></textarea>
</div>
<button className='btn btn-primary my-3 mx-2' onClick={clicked}>Convert To uppercase </button>
<button className='btn btn-primary my-3 mx-2' onClick={clickedlower}>Convert To Lowercase </button>
<button className='btn btn-primary my-3 mx-2' onClick={clickedclear}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-primary mx-2 my-3">Speak</button>
</div>
<div className="conatiner" style = {{color:props.mode === 'dark'? 'white':'black'}}>
<h1>Your Text Summary</h1>
<p>{wordCount} words  and {text.length} characters</p>
<h2>Preview</h2>
<h5>{text.length>0?text:"Enter text in the above box to preview it." }</h5>
</div>
</>
  )
}
