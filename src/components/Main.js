require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import AddNewBet from './AddNewBet.js';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModalAddNewbet: false
    };
  }

  render() {
    const {showModalAddNewbet} = this.state;

    return (
      <div className="index">
        <div>
          Foo
          <span onClick={() => this.toggleAddNewBetModal()}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </span>
        </div>
        <AddNewBet showModalAddNewbet={showModalAddNewbet} onHide={() => this.setState({showModalAddNewbet: false})} />
      </div>
    );
  }

  toggleAddNewBetModal() {
    const {showModalAddNewbet} = this.state;
    this.setState({showModalAddNewbet: !showModalAddNewbet})
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
