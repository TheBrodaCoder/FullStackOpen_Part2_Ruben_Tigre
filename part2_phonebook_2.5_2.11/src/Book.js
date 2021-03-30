import React from 'react';
import BookLine from './BookLine';


const Book = ({persons, searchedPhones, isSearching, handleClick}) => {

    return (
        <table>
            <tbody>
                {
                    !isSearching ?
                    (
                        persons.map(
                            person => <BookLine key={`${person.name}_${person.number}`} name={person.name} number={person.number} id={person.id} handleClick={handleClick}/>
                        )
                    )
                    :
                    (
                        searchedPhones.map(
                            person => <BookLine key={`${person.name}_${person.number}`} name={person.name} number={person.number} id={person.id} handleClick={handleClick}/>
                        )
                    )
                }
            </tbody>
        </table>
    )
    
}

export default Book;