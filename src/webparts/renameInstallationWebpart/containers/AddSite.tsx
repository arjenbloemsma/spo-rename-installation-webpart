import * as React from 'react';
import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import { getSite } from '../actions';
import styles from '../components/RenameInstallationWebpart.module.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

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
        <button type="submit" className={ styles.button }>
          Validate provided Installation URL.
        </button>
      </form>
    </div>
  );
};

export default connect()(AddSite);
