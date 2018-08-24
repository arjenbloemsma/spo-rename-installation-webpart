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

class ClickableTitle extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      url: this.props.url,
      title: this.props.title
    };
  }

  public render () {
    return (
      <a href={this.state.url} target="_blank">{this.state.title}</a>
    )
  }
}

var ListComponent = React.createClass({
  render: function() {
    // Notice how we use the React.Children.map utility
    // here instead of working with this.props.children directly.
    // For the curious, add a debugger statement here
    // and examine this.props.
    var children = React.Children.map(
      this.props.children,
      function(child) {
        return <li>{child}</li>;
      }
    );
    return <ul>{children}</ul>;
  }
});

class UpdateButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hideDialog: true };
  }
  getValidSites() {
    const { sites } = this.props;
    return sites.filter(s => s.siteInfo.Exists);
  }
  toggleDialog() {
    this.setState({ hideDialog: !this.state.hideDialog })
  }
  renameInstallationSites(e) {
    e.preventDefault();
    const { updateSites, sites } = this.props;
    const numberOfSitesToRename = this.getValidSites().length;
    if (numberOfSitesToRename <= 0) {
      return;
    }
    updateSites(sites);
    this.toggleDialog();
  }
  render() {
    const numberOfSitesToRename = this.getValidSites().length;
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
            'Validate the title(s) of the following updated Installation site(s)'
          }}
          modalProps={{
            titleAriaId: 'myLabelId',
            subtitleAriaId: 'mySubTextId',
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }}
        >
          <ListComponent>
            {this.getValidSites().map(s => <ClickableTitle url={s.siteInfo.AbsoluteUri} title={s.siteInfo.RelativeUrl} />)}
          </ListComponent>
          {null /** You can also include null values as the result of conditionals */}
          <DialogFooter>
            <PrimaryButton onClick={(e) => this.renameInstallationSites(e)} text="Done" />
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
