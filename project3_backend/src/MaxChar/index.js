import React, { useState } from 'react';
import axios from 'axios';

function MaxChar() {

    const [str, setStr] = useState('')
    const [returnedStr, setReturnedStr] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post(
            'http://localhost:3002/api/max-char',
            {
                str: str,
            }
        )
        setReturnedStr(response.data)
    }

    return(
        <div className="MaxChar">
            <h2>Find the most Frequent character in a String</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="str">Enter a String:</label>
                <input
                    id="str" 
                    type="text"
                    value={str}
                    onChange={event => setStr(event.target.value)}
                />
                <button>Submit</button>
            </form>
            <div>
                {returnedStr ? <p style={{color: 'green'}}>{returnedStr}</p> : ''}
            </div>
        </div>
    )
}

export default MaxChar;