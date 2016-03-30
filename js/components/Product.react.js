import React from 'react'
import {Link} from 'react-router'

import Money from './Money.react'

export default ({Id, Name, ImageUrl, PriceDecimal}) =>
  <li>
    <Link to={`/details/${Id}`} name={Name}>
      <img src={ImageUrl} alt={Name} />
      <div className='name-and-price'>
        <span className='name'>{Name}</span>
        <Money price={PriceDecimal} className='price' />
      </div>
    </Link>
  </li>
