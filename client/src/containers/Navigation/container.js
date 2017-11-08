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
        isOpen: false
      };

      this.onClick = this.onClick.bind(this);
    }

    onClick() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          onClick={this.onClick}
          isOpen={this.state.isOpen}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);