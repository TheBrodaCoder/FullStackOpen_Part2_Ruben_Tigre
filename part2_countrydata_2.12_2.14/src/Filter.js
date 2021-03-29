import React from 'react';

const Filter = (props) => {
    return (
        <div className="filter-block">
            <input type='text' pattern='[^a-zA-Z\d\s:]' name='filter' onKeyUp={props.handleKeyUp} onChange={props.handleFilter} value={props.filter}/>
        </div>
    )
}

export default Filter;