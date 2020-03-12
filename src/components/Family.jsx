import React from 'react'

import { childWithProps } from '../utils/utils'

export default props => 
  <div>
    <h1>Family</h1>
    { childWithProps(props) }
  </div>