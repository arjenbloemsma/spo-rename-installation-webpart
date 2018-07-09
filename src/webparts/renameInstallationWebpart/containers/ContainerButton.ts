import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import UpdateButton from '../components/UpdateButton';

const mapStateToProps = (state) => ({
  sites: state.sites
});

export default connect(mapStateToProps)(UpdateButton);
