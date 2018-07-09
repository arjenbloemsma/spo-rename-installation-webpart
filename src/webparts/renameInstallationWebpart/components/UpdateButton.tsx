import * as React from 'react';
import { updateSites } from '../actions';
import styles from '../components/RenameInstallationWebpart.module.scss';

const UpdateButton = ({ sites, dispatch }) => {
  const OnClick = e => {
    e.preventDefault();
    if (sites.length <= 0) {
      return;
    }
    dispatch(updateSites(sites));
  };

  return (
    <button
      className={ styles.button }
      onClick={OnClick}
      disabled={sites.length <= 0}>
      Update Title(s)
    </button>
  );
};

export default UpdateButton;
