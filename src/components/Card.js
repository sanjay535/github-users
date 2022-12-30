import React, { Component } from "react";
import { connect } from "react-redux";
import { showPopup } from "../actions/actions";
import placeholderSrc from '../avatar.png';
import ProgressiveImage from "react-progressive-graceful-image";


class Card extends Component {
  displayPopup = (e) => {
    // console.log("e.target=", e.target.parentElement.parentElement.id);
    const user_id = e.target.parentElement.parentElement.id;
    const { userList } = this.props;
    const selected_user = userList.find(
      (user) => Number(user.id) === Number(user_id)
    );
    // this.props.dispatch(fetchSelectedUserDetails(selected_user.url));
    // this.props.dispatch(
    //   fetchSelectedUserFollowers(selected_user.followers_url)
    // );
    this.props.dispatch(showPopup(true, selected_user));
  };

  render() {
    // console.log("this.props in card=", this.props);
    const { user } = this.props;
   
    return (
      <div className="card" id={user.id} onClick={this.displayPopup}>
        <div className="left">
        <ProgressiveImage src={user.avatar_url} placeholder={placeholderSrc}>
            {(src, loading) => (
              <img
                className={`image${loading ? " loading" : " loaded"}`}
                src={src}
                alt="avatar"
                width="auto"
                height="150"
              />
            )}
    </ProgressiveImage>
          {/* <img className="avatar-img" src={user.avatar_url} alt="avatar" /> */}
        </div>
        <div className="right">
          <span>{user.login}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state= ", state);
  const { show, userList } = state.users;
  return {
    show,
    userList,
  };
}
export default connect(mapStateToProps)(Card);
