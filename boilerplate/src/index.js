import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';

/* eslint-disable */
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        <Button></Button>
      </div>
    );
  }
}
/* eslint-enable */
ReactDOM.render(<HelloMessage name="Kin" />, document.getElementById('root'));
