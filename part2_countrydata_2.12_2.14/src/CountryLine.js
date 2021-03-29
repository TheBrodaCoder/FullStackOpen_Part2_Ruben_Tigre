import React from 'react';

const CountryLine = (props) => {

    return(
        <tr className='CountryLine-block'>
            <td>
                {props.name}
            </td>
            <td>
                <button onClick={props.handleClick} name={props.id}>show</button>
            </td>
        </tr>
    )
}

export default CountryLine;