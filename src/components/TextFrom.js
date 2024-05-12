import React, {useState}  from 'react'

export default function TextFrom(props) {
    const [text, textCount ] = useState('Enter your text here');

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
    <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="5"></textarea>
          </div>
          </div>
          <div className="row">
  <div className="col">
    <button className="btn btn-primary mb-1" onClick={handleOnClick}>Convert Your Text</button>
  </div>
  <div className="col">
    <button className="btn btn-primary" onClick={handleOnClickLower}>Convert Your Text</button>
  </div>
</div>

    </>
  )
}
