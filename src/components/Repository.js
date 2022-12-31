import React from "react";
import { connect } from "react-redux";
import {FaGithub} from 'react-icons/fa';


class Repository extends React.Component {
  render() {
    // console.log("follower props=", this.props.follower);
    // console.log("in followers= ", onFollowerClick);
    const {fullname, url}=this.props;
    return (
      <div className="follower">
        <div className="left">
          <FaGithub height={30}/>
        </div>
        <a
          href={url}
          target='_blank'
          className="right"
          rel='noreferrer'
        >
          {fullname}
        </a>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    user_repos: state.users.user_repos,
  };
})(Repository);
