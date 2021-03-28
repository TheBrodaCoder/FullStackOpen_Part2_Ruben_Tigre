import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
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
      <div>
        filter shown with <input type='text' onChange={handleSearch} value={stringToSearch} name='strToSearch'/>
      </div>
      <h2>Add a new entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} name={'name'}/>
          number: <input type='number' onChange={handleChange} value={newNumber} name={'number'}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {renderedNumbers}
      </ul>
    </div>
  )
}

export default App