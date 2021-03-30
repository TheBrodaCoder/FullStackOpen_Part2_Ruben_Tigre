import React from 'react';

const BookLine = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.number}
            </td>
            <td>
                <button name={props.id} onClick={() => props.handleClick(props.id)} >Delete</button>
            </td>
        </tr>
    )
}

export default BookLine;