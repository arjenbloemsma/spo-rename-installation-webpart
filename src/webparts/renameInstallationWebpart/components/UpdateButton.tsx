import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { updateSites } from '../actions';

const UpdateButton = ({ sites, dispatch }) => {
  const numberOfSitesToRename = sites.filter(s => s.siteInfo.Exists).length;
  const renameInstallationSites = e => {
    e.preventDefault();
    if (numberOfSitesToRename <= 0) {
      return;
    }
    dispatch(updateSites(sites));
  };

  return (
    <DefaultButton
      primary={true}
      onClick={renameInstallationSites}
      disabled={numberOfSitesToRename <= 0}>
      Update {numberOfSitesToRename} Installation site(s)
    </DefaultButton>
  );
};

export default UpdateButton;
