import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ error, setError] = useState('');

  const handleChange = (evt) => {
    setNewName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const noteObject = {
      name: newName
    };
    persons.some(person => person.name === newName) ? 
    (alert(`${newName} is already added to phonebook`))
    :
    (newName === '' ? setError('Introduzca un nombre') : (setPersons(persons.concat(noteObject), setError('') ) ) );
    setNewName('');
  };

  const renderedNumbers = persons.map(
    person => <li key={person.name + '_' + persons.length}>{person.name}</li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
          <p>{error}</p>
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