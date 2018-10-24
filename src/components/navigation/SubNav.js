import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktopSubmenuIcon: false
    }
  }
  render() {
    return (
      <span className="navbar-toggle toggle-desktop collapsed">
        <Popup
          trigger={ 
          <button className="button">       
            <span className="icon-bar short"></span>
            <span className="icon-bar long"></span>
            <span className="icon-bar short"></span>
          </button>}
          modal
          closeOnDocumentClick
        >
          <span> Modal content </span>
        </Popup>
      </span>
    );
  }
}

export default SubNav;