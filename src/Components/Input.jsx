import { useState } from "react";

function Input(){
    const [content, setContent] = useState("");
    console.log("Content", content);
    const handleAlert = () => {
        alert(content);
        setContent("");
    }

    const handleInput = (e) => {
        console.log("e.target.value", e.target.value);
        setContent(e.target.value);
    }
    return <>
    <input type="text" value={content} onChange={handleInput}></input>
    <button onClick={handleAlert}>Add Items</button>
    </>
}

export default Input;