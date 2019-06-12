import React, { Component } from 'react';

const asyncComponent = importComponent => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
      importComponent().then(component => {
        const { default: Component } = component;
        this.setState({ component: <Component {...this.props} /> });
      });
    }

    render() {
      return this.state.component;
    }
  }
  return AsyncComponent;
};

export default asyncComponent;
