import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { updateSites } from '../actions';

const UpdateButton = ({ sites, dispatch }) => {
  const renameInstallationSites = e => {
    e.preventDefault();
    if (sites.length <= 0) {
      return;
    }
    dispatch(updateSites(sites));
  };

  return (
    <DefaultButton
      primary={true}
      onClick={renameInstallationSites}
      disabled={sites.filter(s => s.siteInfo.Exists).length <= 0}>
      Update {sites.filter(s => s.siteInfo.Exists).length} Installation site(s)
    </DefaultButton>
  );
};

export default UpdateButton;
