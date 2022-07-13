import { useState } from 'react';
import './App.css';
import contactList from './contacts.json'



function App() {


  const contactsCopy = [...contactList]

  const slicedContactList = contactsCopy.slice(0, 5)

  const [contacts, setContacts] = useState(slicedContactList)


  function addRandom() {
    const pushedContactList = [...slicedContactList] // OJO SEGUNDA COPIA
    pushedContactList.unshift(contactsCopy[Math.floor(Math.random() * 46 + 5)])
    setContacts(pushedContactList)
  }

  function sortByName() {
    const sortedContactList = [...]
    slicedContactList.sort()
    setContacts(slicedContactList)
  }

  function sortByPopularity() {

  }

  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={() => addRandom()}>Add Random</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {
          contacts.map((contact, idx) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td>💩</td>}
                {contact.wonEmmy ? <td>🏆</td> : <td>💩</td>}
              </tr>
            )
          })

        }

      </table>
    </>
  );
}

export default App;
