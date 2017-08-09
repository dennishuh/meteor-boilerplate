import React from 'react';
import moment from 'moment';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

export const NoteListItem = (props) => {
  return (
    <div onClick={() => {
      props.Session.set('selectedNoteId', props.note._id);
    }}>
      <h5>{ props.note.title || 'Untitled note' }</h5>
      { props.note.selected ? 'selected' : undefined }
      <p>{ moment(props.note.updatedAt).format('M/DD/YY')}</p>
    </div>
  );
};

// NoteListItem.propType = {
//   note: React.PropType.object.isRequired
// };

export default createContainer(() => {
  return {
    Session
  }
}, NoteListItem);