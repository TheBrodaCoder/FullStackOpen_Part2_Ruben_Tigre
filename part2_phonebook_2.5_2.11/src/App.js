import React, { useEffect, useState } from 'react'
import Book from './Book';
import Filter from './Filter';
import NewEntry from './NewEntry';
import Notification from './Notification';
import personService from './service/Persons_service';


const App = (props) => {

  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ stringToSearch, setStrSearch ] = useState('');
  const [ searchedPhones, setSearchedPhones] = useState([]);
  const [ isSearching, setIsSearching] = useState(false);
  const [noti, setNoti] = useState({
    msj: 'Default msg',
    display: false,
    error: false
  })

  useEffect(() => {
    personService.getAll().then(response => {setPersons(response.data)}).catch(
      error => {
        console.log('Cant resolve persons');
      }
    )
  }, [])

  const handleNoti = (msj, error) => {
    let newNoti = {
      msj: msj,
      display: true,
      error: error
    };
    setNoti(newNoti);

    setTimeout(() => {
      setNoti({
      msj: 'Default msg',
      display: false,
      error: false
    })
  }, 5000);

  }

  const handleChange = (evt) => {
    evt.target.name === 'name' ? 
    setNewName(evt.target.value)
    :
    setNewNumber(evt.target.value)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    if (newName !== '' && newNumber !== '') {

      const newPerson = {
        name: newName,
        number: newNumber
      };
      const findPerson = persons.some(person => person.name === newName);

      if (findPerson === false) {

        personService.addPerson(newPerson).then(
          response => {
            setNewNumber('');
            setNewName('');
          }
        ).catch(
          error=>
          handleNoti('error at upload new person ' + error, true)
        ).finally(
          () => {
            personService.getAll().then(response => {setPersons(response.data)}).catch(
              error => {
                handleNoti('error at upload new person ' + error, true)
              }
            )
            handleNoti(`${newPerson.name} is now added to the phonebook`, false);
          }
        )
        
      }else if (persons.some(person => person.number === newNumber)) {
        alert(`${newNumber} is already on the phonebook`);
      } else {
        let update = window.confirm(`Do you want to update ${newName} phonenumber`);
        if (update) {
          let personToUpdate = persons.filter(person => person.name === newName);
         
          personService.updatePerson(personToUpdate[0].id, newPerson).catch(
            error => handleNoti('error at upload new person ' + error, true)
          ).then(
            (response) => {
              handleNoti(`${newName} number is already updated`, true)
              setPersons(persons.map(
                person => person.id !== personToUpdate[0].id ? person : response.data
                
              ))
              setNewName('');
              setNewNumber('');
            }
          )
        }
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

  const handleClick = (evt) => {
    let deleted = true;
    let id = evt.target.name;

    personService.popPerson(id).catch(
      error => {
        handleNoti('error at removing entry. That entry doesnt exist', true);
        deleted = false;
        personService.getAll().then(response => {setPersons(response.data)}).catch(
          error => {
            handleNoti('error at upload new person ' + error, true)
          }
        );
      }
    ).finally(
      () => {
        if (deleted) {
          personService.getAll().then(response => {setPersons(response.data)}).catch(
            error => {
              handleNoti('error at upload new person ' + error, true)
            }
          );
          handleNoti('deleted sucesfully', false);
        }
      }
    );
    
    
  }

  
  return (
    <div >
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} handleKeyUp={handleKeyUp} stringToSearch={stringToSearch}/>
      <h2>Add a new entry</h2>
      <Notification noti={noti}/>
      <NewEntry handleSubmit={handleSubmit} handleChange={handleChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Book persons={persons} searchedPhones={searchedPhones} isSearching={isSearching} handleClick={handleClick}/>
    </div>
  )
}

export default App;