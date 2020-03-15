import React from 'react'

export default props =>
  <div>
    <button onClick={ () => props.exitNotify('Mall') }>
      I'm gona out
    </button>
  </div>