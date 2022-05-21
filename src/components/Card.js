import React, { Component } from "react";
import { connect } from "react-redux";
import { showPopup } from "../actions/actions";

class Card extends Component {
  displayPopup = (e) => {
    console.log("e.target=", e.target.parentElement.parentElement.id);
    this.props.dispatch(showPopup(true));
  };

  render() {
    // console.log("this.props in card=", this.props);
    const { user } = this.props;
    return (
      <div>
        <div className="card" id={user.id} onClick={this.displayPopup}>
          <div className="left">
            <img className="avatar-img" src={user.avatar_url} alt="avatar" />
          </div>
          <div className="right">
            <span>{user.login}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state= ", state);
  return {
    show: state.users.show,
  };
}
export default connect(mapStateToProps)(Card);
