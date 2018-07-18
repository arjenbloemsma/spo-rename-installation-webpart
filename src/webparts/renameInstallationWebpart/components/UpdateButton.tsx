import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogBase, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DispatchProp, connect } from 'react-redux';
import { updateSites } from '../actions';

const UpdateButton = ({ sites, dispatch }) => {
  //this.state = { hideDialog: true };
  //this.props.hidden = true;
  const numberOfSitesToRename = sites.filter(s => s.siteInfo.Exists).length;

  //let dialog: DialogBase | undefined;
  let dialog: any;
  const _showDialog = (): void => {
    //setState({ hideDialog: false });
    //this.props.hidden = false;
    dialog.setState({ hidden: false });
  };
  const _closeDialog = (): void => {
    //this.setState({ hideDialog: true });
    //this.props.hidden = true;
    dialog.setState({ hidden: true });
  };
  const renameInstallationSites = e => {
    e.preventDefault();
    if (numberOfSitesToRename <= 0) {
      return;
    }
    dispatch(updateSites(sites));
    _showDialog();
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
        onDismiss={_closeDialog}
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
          <PrimaryButton onClick={_closeDialog} text="Save" />
          <DefaultButton onClick={_closeDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </div>);
};

export default UpdateButton;
