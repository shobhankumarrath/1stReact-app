import React, {useState}  from 'react'

export default function TextFrom(props) {
    const [text, textCount ] = useState('');

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
    <> <div>
        <h1>{props.heading}</h1>
    <div className="mb-2">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
          </div>
          </div>
          <div className="row">
  <div className="col">
    <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert Your Text Into Upeer Case</button>
  </div>
  <div className="col">
    <button className="btn btn-primary " onClick={handleOnClickLower}>Convert Your Text to Lower Case</button>
  </div>
  <div className="col">
    <button className="btn btn-primary mx-1" onClick={speakMale}>Speak Male Voice</button>
  </div>
</div>
<div className="container my-3">
  <h3>You Text Summary</h3>
  <p>The number of characters in your text {text.length} and number of words are {text.split(" ").length}</p>
  <p>Time for the user to study the wordsis in  {0.008 * text.split(" ").length} minutes</p>
  <h2>
    Preview
  </h2>
  <p>{text}</p>
</div>
    </>
  )
}
