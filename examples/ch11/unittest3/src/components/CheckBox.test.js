import React from 'react';
import Checkbox from './Checkbox';

import {shallow} from 'enzyme';

test('Checkbox changes the text after click', () => {
    const checkbox = shallow(
       <Checkbox labelOn="On" labelOff="Off" />
    );

    expect(checkbox.text()).toEqual('Off');
     //이벤트 시뮬레이션
    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
});
