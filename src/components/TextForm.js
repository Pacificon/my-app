import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoclick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearclick = () => {

        let newText = " ";
        setText(newText)
    }
    const handleEmailclick = () => {
        // function extractEmails (text)
        // {
        //     return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);     /this is not working and think something else/
        // }
        // return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);m
        // let newText =extractEmails(text).join('\n');
        // setText(newText)
    }
    const handleToCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    // it splits the extra space then again adds the string together.
    const handleToRemove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change is clicked");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // setText("Enter new text");
    // text = "sdjkfhakdjf"; wrong way to change the state
    // setText("Enter the text2"); right way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode !== 'white' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    {/* <label for="myBox">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</div>
                <div className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</div>
                <div className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</div>
                <div className="btn btn-primary mx-2" onClick={handleEmailclick}>All emails</div>
                <div className="btn btn-primary mx-2" onClick={handleToCopy}>Copy text</div>
                <div className="btn btn-primary mx-2" onClick={handleToRemove}>Remove extra space</div>
            </div >
            {/* my-3 gives margin of 3 in y axis */}
            <div className="container my-3" style={{ color: props.mode !== 'white' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0 ? text : "Enter something to preview it here:"}
                </p>
            </div>
        </>
    )
}
