import React from 'react'
import ReactDOM from 'react-dom'

// import FirstComponent from './components/FirstComponent'
// import { FirstComponent, SecondComponent } from './components/TwoComponents'
// import MultipleComponent from './components/MultipleComponent'
// import MartinFamily from './components/MartinFamily'
// import Family from './components/Family'
// import Member from './components/Member'
import ComponentWithFunction from './components/ComponentWithFunction'

const el = document.getElementById('root')

ReactDOM.render(
  <div>
    {/* 
    <FirstComponent value="hello" />
    <MultipleComponent /> 
    <FirstComponent value='First' />
    <SecondComponent value='Second' />
    <MartinFamily />

    <Family lastName='Martini'>
      <Member firstName='Andrius' />
      <Member firstName='Jessica' />
    </Family>

    <Family>
      <Member firstName='Andrius' />
    </Family>
    */}

    <ComponentWithFunction />  

  </div>
, el)