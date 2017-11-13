// @flow

import React from 'react';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

type State = {
  searchTerm: string;
  isOpen: boolean;
};

type Props = {
  searchTerm: string;
  handleSearchTermChange: Function;
  history: RouterHistory;
};

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function handlers(WrappedComponent) {
  return class extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        searchTerm: '',
        isOpen: false
      };
    }

    goToSearch = (event) => {
      event.preventDefault();
      this.props.history.push('/search');
    }

    handleSearchTermChange = (event) => {
      this.setState({
        searchTerm: event.target.value.trim()
      });
    }

    onClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleSearchTermChange={this.handleSearchTermChange}
          goToSearch={this.goToSearch}
          onClick={this.onClick}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
