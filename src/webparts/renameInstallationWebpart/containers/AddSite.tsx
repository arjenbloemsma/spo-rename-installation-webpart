import * as React from 'react';
import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import { getSite } from '../actions';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

const AddSite = ({ dispatch }) => {
  let textField: TextField | undefined;
  const OnSubmit = e => {
    e.preventDefault();
    if (!textField.value.trim()) {
      return;
    }
    dispatch(getSite(textField.value));
    textField.setState({ value: ''});
  };

  return (
    <div>
      <form onSubmit={OnSubmit}>
        <TextField ref={t => (textField = t!)} required={true} placeholder="URL of Installation site." />
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
