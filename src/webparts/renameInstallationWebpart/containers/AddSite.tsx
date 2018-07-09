import * as React from 'react';
import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import { getSite } from '../actions';
import styles from '../components/RenameInstallationWebpart.module.scss';

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
        <button type="submit" className={ styles.button }>
          Retrieve Another Site To Rename
        </button>
                      {/* <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a> */}
      </form>
    </div>
  );
};

export default connect()(AddSite);
