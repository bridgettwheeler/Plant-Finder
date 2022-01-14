import {useState} from 'react';
import React from 'react';

//an input field where user can type text
//when text is typed the number of characters are counted and displayed using state
//the handelChange needs to capture the length of text entered

function SearchBar() {

const [char, setChar] = useState("0")
const handelChange = e => {
    
    const text = e.target.value.length
    setChar(text)

}
    return(
        <div>
            <p> {char} </p>
            <input type="text" onChange={handelChange} placeholder= "enter text here" />
        </div>
    );
}

export default SearchBar;