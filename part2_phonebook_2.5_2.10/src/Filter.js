import React from 'react';

const Filter = (props) => {

    return (
        <div>
            filter shown with <input type='text' onChange={props.handleSearch} onKeyUp={props.handleKeyUp} value={props.stringToSearch} name='strToSearch'/>
        </div>
    )
}

export default Filter;