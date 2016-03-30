import React from 'react'

export default ({price, ...props}) =>
  <span {...props}>£{ parseFloat(price).toFixed(2) }</span>
