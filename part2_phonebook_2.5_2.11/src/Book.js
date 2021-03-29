import React from 'react';
import BookLine from './BookLine';


const Book = ({persons, searchedPhones, isSearching}) => {

    return (
        <table>
            <tbody>
                {
                    !isSearching ?
                    (
                        persons.map(
                            person => <BookLine key={`${person.name}_${person.number}`} name={person.name} number={person.number}/>
                        )
                    )
                    :
                    (
                        searchedPhones.map(
                            person => <BookLine key={`${person.name}_${person.number}`} name={person.name} number={person.number}/>
                        )
                    )
                }
            </tbody>
        </table>
    )
    
}

export default Book;