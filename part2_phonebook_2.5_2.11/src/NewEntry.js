import React from 'react';

const NewEntry = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                name: <input onChange={props.handleChange} value={props.newName} name={'name'}/>
                number: <input onChange={props.handleChange} value={props.newNumber} name={'number'}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default NewEntry;