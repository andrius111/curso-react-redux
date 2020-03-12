import React from 'react'

const FirstComponent = props => 
  <h1>First says: { props.value }</h1>

const SecondComponent = props =>
  <h1>Second says: { props.value }</h1>

export { FirstComponent, SecondComponent }