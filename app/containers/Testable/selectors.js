import { createSelector } from 'reselect';

const selectTest = state => state.get('test');

const makeSelectLoading = () =>
  createSelector(selectTest, testState => testState.get('loading'));

const makeSelectError = () =>
  createSelector(selectTest, testState => testState.get('error'));

const makeSelectUsers = () =>
  createSelector(selectTest, testState =>
    testState.getIn(['userData', 'users'])
  );

export { selectTest, makeSelectLoading, makeSelectError, makeSelectUsers };
