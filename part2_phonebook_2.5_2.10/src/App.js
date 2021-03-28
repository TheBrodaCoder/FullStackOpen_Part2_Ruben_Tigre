import React, { useState } from 'react'
import Filter from './Filter';
import NewEntry from './NewEntry';

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchedPhones, setSearchedPhones] = useState([]);
  const [ stringToSearch, setStrSearch ] = useState('');

  const handleChange = (evt) => {
    evt.target.name === 'name' ? 
    setNewName(evt.target.value)
    :
    setNewNumber(evt.target.value)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    if (newName !== '' && newNumber !== '') {
      if (!persons.some(person => person.name === newName && person.number === newNumber)) {
        const newPerson = {
          name: newName,
          number: newNumber
        };
        setPersons(persons.concat(newPerson));
        setNewNumber('');
        setNewName('');
      } else {
        alert(`${newName} or ${newNumber} is already on the phonebook`);
      }
    } else {
      alert('All inputs need to be filled');
    }
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    setStrSearch(evt.target.value);
  }

  const handleKeyUp = (evt) => {
    let searchedPhone = persons.filter(person => person.name.match(new RegExp(stringToSearch, 'i')));
    setSearchedPhones(searchedPhone);
  }

  const renderedNumbers = 
  stringToSearch === '' ? 
  (
    persons.map(
      person => <li key={person.name + '_' + persons.length}>{person.name}  {person.number}</li>
    )
  )
  :
  (
    searchedPhones.map(
      person => <li key={person.name + '_' + persons.length}>{person.name}  {person.number}</li>
    )
  )
  ;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} handleKeyUp={handleKeyUp} stringToSearch={stringToSearch}/>
      <h2>Add a new entry</h2>
      <NewEntry handleSubmit={handleSubmit} handleChange={handleChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <ul>
        {renderedNumbers}
      </ul>
    </div>
  )
}

export default App