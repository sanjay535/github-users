import React from "react";
import { connect } from "react-redux";
import {
  fetchSelectedUserDetails,
  fetchSelectedUserFollowers,
} from "../actions/actions";

class Follower extends React.Component {
  onFollowerClick = (follower) => {
    const { url, followers_url } = follower;
    this.props.dispatch(fetchSelectedUserDetails(url));
    this.props.dispatch(fetchSelectedUserFollowers(followers_url));
    this.props.followerClick();
  };

  render() {
    // console.log("follower props=", this.props.follower);
    const { avatar_url, login } = this.props.follower;
    // console.log("in followers= ", onFollowerClick);
    return (
      <div className="follower">
        <div className="left">
          <img src={avatar_url} alt="avatar" />
        </div>
        <div
          className="right"
          onClick={() => this.onFollowerClick(this.props.follower)}
        >
          {login}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    user_details: state.users.user_details,
  };
})(Follower);
