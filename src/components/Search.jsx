import React, {useState} from 'react';

const Search = ({cb}) => {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }
    return (
        <div className="input-field col s12">
            <input type="search"
                   id="search-field"
                   placeholder="search"
                   onKeyDown={handleKey}
                   onChange={event => setValue(event.target.value)}
                   value={value}
            />
            <button className="btn"
                    style={{position: 'absolute', top: '0', right: '0'}}
                    onClick={handleSubmit}
            >Search</button>
        </div>
    );
};

export default Search;