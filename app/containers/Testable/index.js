import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/Testable/selectors';
import { fetchUsersRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

class Testable extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsersRequest());
  }

  render() {
    const { users } = this.props;
    return (
      <div className="outer">
        <Helmet>
          <title>Test Page</title>
          <meta name="description" content="Test Page" />
        </Helmet>
        <ul>
          {Array.isArray(users) && users.length !== 0
            ? users.map(user => (
              <li key={user.id}>
                <div>{user.name}</div>
              </li>
            ))
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
