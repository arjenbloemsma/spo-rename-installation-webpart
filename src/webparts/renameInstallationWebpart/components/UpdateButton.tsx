import * as React from 'react';
import { bindActionCreators } from 'redux';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogBase, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { connect } from 'react-redux';
import { updateSites } from '../actions';

interface Props {
  sites: any[],
  updateSites: any
};

interface State {
  hideDialog: boolean
};

class UpdateButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hideDialog: true };
  }
  getNumberOfSitesToRename() {
    const { sites } = this.props;
    const numberOfSitesToRename = sites.filter(s => s.siteInfo.Exists).length;
    return numberOfSitesToRename;
  }
  toggleDialog() {
    this.setState({ hideDialog: !this.state.hideDialog })
  }
  renameInstallationSites(e) {
    e.preventDefault();
    const { updateSites, sites } = this.props;
    const numberOfSitesToRename = this.getNumberOfSitesToRename();
    if (numberOfSitesToRename <= 0) {
      return;
    }
    updateSites(sites);
    this.toggleDialog();
  }
  render() {
    const numberOfSitesToRename = this.getNumberOfSitesToRename();
    return (
      <div>
        <DefaultButton
          primary={true}
          onClick={() => this.toggleDialog()}
          disabled={numberOfSitesToRename <= 0}>
          Update {numberOfSitesToRename} Installation site(s)
        </DefaultButton>
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={() => this.toggleDialog()}
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
            <PrimaryButton onClick={(e) => this.renameInstallationSites(e)} text="Save" />
            <DefaultButton onClick={() => this.toggleDialog()} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>);
  }
}

export default connect(
  state => ({ sites: state.sites }),
  dispatch => bindActionCreators({
    updateSites
  }, dispatch),
)(UpdateButton);
