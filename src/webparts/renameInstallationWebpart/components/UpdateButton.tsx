import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogBase, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { connect } from 'react-redux';
import { updateSites } from '../actions';

const UpdateButton = ({ dispatch, sites }) => {
  const numberOfSitesToRename = sites.filter(s => s.siteInfo.Exists).length;

  //let dialog: DialogBase | undefined;
  let dialog: any;
  const showDialog = (): void => {
    dialog.setState({ hideDialog: false });
  };
  const closeDialog = (): void => {
    dialog.setState({ hideDialog: true });
  };
  //this.state.hideDialog = true;
  const renameInstallationSites = e => {
    e.preventDefault();
    if (numberOfSitesToRename <= 0) {
      return;
    }
    dispatch(updateSites(sites));
    showDialog();
  };

  return (
    <div>
      <DefaultButton
        primary={true}
        onClick={renameInstallationSites}
        disabled={numberOfSitesToRename <= 0}>
        Update {numberOfSitesToRename} Installation site(s)
      </DefaultButton>
      <Dialog
        ref={d => (dialog = d!)}
        hidden={true}
        onDismiss={closeDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Validate updated sites',
          subText:
          'Validate the following updated Installation sites:'
        }}
        modalProps={{
          titleAriaId: 'myLabelId',
          subtitleAriaId: 'mySubTextId',
          isBlocking: false,
          containerClassName: 'ms-dialogMainOverride'
        }}
      >
        {null /** You can also include null values as the result of conditionals */}
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text="Save" />
          <DefaultButton onClick={closeDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </div>);
};

export default connect()(UpdateButton);
