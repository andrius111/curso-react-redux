import React from 'react'
import Son from './Son'

export default props => {
  const exitNotify = place => alert(`Released for ${place}`)

  return (
    <duv>
      <Son exitNotify={ exitNotify } />
    </duv>
  )
}