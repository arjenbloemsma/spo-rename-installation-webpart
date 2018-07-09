import * as React from 'react';
import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import { getSite } from '../actions';

const AddSite = ({ dispatch }) => {
  let input;
  const OnSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(getSite(input.value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={OnSubmit}>
        <input ref={node => input = node} />
        <button type="submit">
          Retrieve Another Site To Rename
        </button>
      </form>
    </div>
  );
};

export default connect()(AddSite);
