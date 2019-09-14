import { connect } from 'react-redux';

import Auth from './component';

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
)(Auth);
