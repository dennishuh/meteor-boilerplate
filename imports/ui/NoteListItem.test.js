import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function() {
    it('should render title and timestamp', function() {
      const note = {
        title: 'My title here',
        updatedAt: 1501478805487
      }
      const wrapper = mount(<NoteListItem note={ note }/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('7/31/17');
    })
  });
}
