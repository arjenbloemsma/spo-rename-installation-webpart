import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import SiteList from '../components/SiteList';

const mapStateToProps = state => ({
  sites: state.sites
});

export default connect(
  mapStateToProps
)(SiteList);
