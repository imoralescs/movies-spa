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
        isOpen: false,
        isSticky: false
      };

      this.onClick = this.onClick.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', () => {
        this.handleScroll();
      });
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', () => {
        this.handleScroll();
      });
    }

    onClick() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    handleScroll() {
      let {isSticky} = this.state;
      if(window.scrollY > this.prev) !isSticky && this.setState({isSticky: true});
        this.prev = window.scrollY;
      if(window.scrollY === 0) isSticky && this.setState({isSticky: false});
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          onClick={this.onClick}
          isOpen={this.state.isOpen}
          isSticky={this.state.isSticky}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);