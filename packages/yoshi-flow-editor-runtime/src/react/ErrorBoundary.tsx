import React from 'react';
import PropTypes from 'prop-types';

interface IErrorBoundary {
  handleException: (error: Error) => void;
  configure?: () => void;
}
export class ErrorBoundary extends React.Component<IErrorBoundary> {
  static propTypes = {
    handleException: PropTypes.func.isRequired,
  };

  constructor(props: IErrorBoundary) {
    super(props);

    if (props.configure) {
      props.configure();
    }
  }

  componentDidCatch(error: Error) {
    this.props.handleException(error);
  }

  render() {
    return this.props.children;
  }
}
