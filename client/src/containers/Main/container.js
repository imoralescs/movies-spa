import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
//import axios from 'axios';
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
        movies: []
      };
    }

    componentDidMount() {
      this.props.loadNowPlaying();
      this.props.loadUpcoming();
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
