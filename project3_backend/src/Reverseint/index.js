import React, { useState } from 'react';
import axios from 'axios';

function ReverseInt() {

    const [int, setInt] = useState('')
    const [returnedInt, setReturnedInt] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post(
            'http://localhost:3002/api/reverse-int',
            {
                int: int,
            }
        )
        setReturnedInt(response.data)
    }

    return(
        <div className="ReverseInt">
            <h2>Reverse and Integer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="int">Enter an integer:</label>
                <input
                    id="int" 
                    type="text"
                    value={int}
                    onChange={event => setInt(event.target.value)}
                />
                <button>Submit</button>
            </form>
            <div>
                {returnedInt ? <p style={{color: 'green'}}>{returnedInt}</p> : ''}
            </div>
        </div>
    )
}

export default ReverseInt;