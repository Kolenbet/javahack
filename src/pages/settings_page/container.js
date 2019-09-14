import { connect } from 'react-redux';

import Settings from './component';

export const mapStateToProps = (state) => ({
  state: state,
});

export const mapDispatchToProps = (dispatch) => ({
  closePublishOfferAreaModal: () => {
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
