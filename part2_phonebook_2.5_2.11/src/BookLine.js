import React from 'react';

const BookLine = (props) => {
    console.log(props.id);
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.number}
            </td>
            <td>
                <button name={props.id} onClick={props.handleClick} >Delete</button>
            </td>
        </tr>
    )
}

export default BookLine;