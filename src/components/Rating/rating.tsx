import React, {useState} from 'react';

interface Props {
    callback: (value: number) => {};
}

const Rate = ({ callback }:Props) => {
    const [value, setValue] = useState(5);

    return(
        <div style={{marginTop:'15px'}}>
            <input type='range' min='1' max='10' value={value} onChange={(e) => setValue(Number(e.currentTarget.value))} style={{display:'inline',marginLeft:'20px', marginRight:'10px'}}/>
            {value}
            <p style={{display:'inline', marginLeft:'10px'}}>
            {/* need an inline arrow function here because we're going to call the callback with a value, and if it isn't inline, it will run immediatly without the value, which is not what we want */}
                <button onClick={() => callback(value)}>Rate</button>  
            </p>
        </div>
    )
}

export default Rate;