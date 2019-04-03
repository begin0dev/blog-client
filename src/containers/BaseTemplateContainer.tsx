import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { Header } from 'components';
import { Actions as baseActions, IBaseState } from 'store/modules/base';

interface IProps {
  baseState: IBaseState;
  dispatchToggleSidebar(bool: boolean): void;
}

class BaseTemplateContainer extends React.Component<IProps> {
  toggleSidebar = (bool: boolean) => {
    const { dispatchToggleSidebar } = this.props;
    dispatchToggleSidebar(bool);
  };

  render() {
    const { toggleSidebar } = this;
    const { isTablet, sidebar } = this.props.baseState;
    return <Header visible={sidebar} isTablet={isTablet} toggleSidebar={toggleSidebar} />;
  }
}

const mapStateToProps = (state: IStoreState) => ({
  baseState: state.base,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleSidebar(bool: boolean) {
    return dispatch(baseActions.toggleSidebar(bool));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseTemplateContainer);
