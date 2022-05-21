import React from "react";
import { connect } from "react-redux";
import {
  fetchSelectedUserDetails,
  fetchSelectedUserFollowers,
  hidePopup,
} from "../actions/actions";
import Follower from "./Follower";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  componentDidMount() {
    console.log("popup mounted");
    const { url, followers_url } = this.props.current_user;
    this.props.dispatch(fetchSelectedUserDetails(url));
    this.props.dispatch(fetchSelectedUserFollowers(followers_url));
    document.addEventListener("click", this.handleClickOutSide);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutSide);
  }

  handleClickOutSide = (e) => {
    if (e.target.id === "myModal") {
      this.props.dispatch(hidePopup(false));
    }
  };

  hidePopup = () => {
    this.props.dispatch(hidePopup(false));
  };

  render() {
    const { user_details, followers } = this.props;
    return (
      <div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.hidePopup}>
              &times;
            </span>
            <p>
              Username : &nbsp;
              <span>{user_details.login}</span>
            </p>
            <div className="user-details">
              <div className="user-image">
                <img src={user_details.avatar_url} alt="avatar" />
              </div>
              <div className="name">{user_details.name}</div>
              <div className="company">{user_details.company}</div>
              <div className="followers">{user_details.followers}</div>
            </div>

            <div className="followers">
              {followers.map((follower) => {
                return <Follower follower={follower} key={follower.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    show: state.users.show,
    current_user: state.users.current_user,
    user_details: state.users.user_details,
    followers: state.users.followers,
  };
})(Popup);