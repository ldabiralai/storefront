import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import Money from '../../js/components/Money.react'

describe('Money', () => {

  it('should format price to 2 decimal places', () => {
    const component = shallow(<Money price={100.0}/>);
    expect(component.text()).to.eq('£100.00');
  });

  it('should work if string passed in', () => {
    const component = shallow(<Money price="90"/>);
    expect(component.text()).to.eq('£90.00');
  });

});
