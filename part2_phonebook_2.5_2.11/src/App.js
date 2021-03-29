import React, { useEffect, useState } from 'react'
import Book from './Book';
import Filter from './Filter';
import NewEntry from './NewEntry';
import axios from 'axios';

const App = (props) => {

  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ stringToSearch, setStrSearch ] = useState('');
  const [ searchedPhones, setSearchedPhones] = useState([]);
  const [ isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

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
    if (evt.target.value === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  }

  const handleKeyUp = (evt) => {
    let searchedPhone = persons.filter(person => person.name.match(new RegExp(stringToSearch, 'i')));
    setSearchedPhones(searchedPhone);
  }
  
  

  console.log(persons, searchedPhones)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} handleKeyUp={handleKeyUp} stringToSearch={stringToSearch}/>
      <h2>Add a new entry</h2>
      <NewEntry handleSubmit={handleSubmit} handleChange={handleChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Book persons={persons} searchedPhones={searchedPhones} isSearching={isSearching}/>
    </div>
  )
}

export default App;