import React, {useState}  from 'react'

export default function TextFrom(props) {
    const [text, textCount ] = useState('');
    
     const validateJson = () => {
      const json = text;
      try{
        JSON.parse(json);
        alert('JSON is valid');
      }
      catch(error){
        alert('Invalid JSON' + error.message);
      }
     }

    const speakMale = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }


    const handleOnClick = () => {
       const thenewtext = text.toUpperCase();
       textCount(thenewtext);
    } 

    const handleOnClickLower = () => {
        const newText = text.toLowerCase();
        textCount(newText);
    }

    const handleOnChange = (event) => 
        {
       textCount(event.target.value);
    }
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}  onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
    <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert Your Text Into Upper Case</button>
    <button className="btn btn-primary " onClick={handleOnClickLower}>Convert Your Text to Lower Case</button>
    <button className="btn btn-primary mx-1" onClick={speakMale}>Speak</button>
    <button className="btn btn-primary mx-1" onClick={validateJson}>Validate Json</button>
    </div>
<div className="container my-3" style={{color:  props.mode === 'dark'?'white':'#042743'}}>
  <h3>You Text Summary</h3>
  <p>The number of characters in your text {text.length} and number of words are {text.split(" ").length}</p>
  <p>Time for the user to study the wordsis in  {0.008 * text.split(" ").length} minutes</p>
  <h2>
    Preview
  </h2>
  <p>{text.length>0?text:"Enter some text in the text box to preview it here" }</p>
</div>
    </>
  )
}
