import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      };

      this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
      this.goToSearch = this.goToSearch.bind(this);
    }

    goToSearch(event) {
      event.preventDefault();
      this.props.history.push('/search');
    }

    handleSearchTermChange(event) {
      this.setState({
        searchTerm: event.target.value.trim()
      });
      //this.props.handleSearchTermChange(event.target.value);
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleSearchTermChange={this.handleSearchTermChange}
          goToSearch={this.goToSearch}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
