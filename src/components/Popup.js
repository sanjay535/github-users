import React from "react";
import { connect } from "react-redux";
import { hidePopup } from "../actions/actions";

class Popup extends React.Component {
  hidePopup = (e) => {
    this.props.dispatch(hidePopup(false));
  };

  render() {
    // console.log("this.props in popup= ", this.props);
    return (
      <div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.hidePopup}>
              &times;
            </span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    show: state.users.show,
  };
})(Popup);
