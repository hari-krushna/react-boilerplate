import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { fetchUsersRequest } from './actions';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/Testable/selectors';

class Testable extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsersRequest());
  }
  render() {
    const { users } = this.props;
    return (
      <div className="outer" >
        <ul>
          {Array.isArray(users) && users.length !== 0
            ? users.map(user => <li key={user.id}>
                <div>{user.name}</div>
                </li>)
            : null}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Testable);
