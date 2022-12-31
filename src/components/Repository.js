import React from "react";
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
        <div>
            <a
            href={url}
            target='_blank'
            className="right"
            rel='noreferrer'
            >
            {(window.innerWidth<=700)? `${fullname.substring(0, 20)}...`:fullname}
            </a>
        </div>
      </div>
    );
  }
}

export default Repository;
