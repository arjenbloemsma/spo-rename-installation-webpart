import * as React from 'react';
import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import { getSite } from '../actions';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

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
        <TextField ref={node => input = node} required={true} placeholder="URL of Installation site." />
        <DefaultButton
          primary={true}
          type="submit"
          >
          Validate Installation URL
        </DefaultButton>
      </form>
    </div>
  );
};

export default connect()(AddSite);
