import React from 'react'

export default () => {
  const persons = ['Andrius', 'Jessica', 'José']

  const getPersons = persons => (
    persons.map(person => <li>{ person }</li>)
  )

  return (
    <ul>
      { getPersons(persons) }
    </ul>
  )
}