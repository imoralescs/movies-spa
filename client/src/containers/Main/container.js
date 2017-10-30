import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import axios from 'axios';
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
      let self = this;
      axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-10-20&primary_release_date.lte=2017-10-30&api_key=e7460b842aa53d9b75d10fe34b62ac7d`)
        .then(function (response) {
          self.setState({ movies: response.data.results});
        })
        .catch(function (error) {
          console.log(error);
        });
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
