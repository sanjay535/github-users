import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import placeholderSrc from '../avatar.png';
import {
  fetchSelectedUserDetails,
  fetchSelectedUserFollowers,
  showPopup,
} from '../actions/actions';

class SearchUser extends React.Component {
  searchedUserClicked = () => {
    // console.log(this.props.user);
    const { url, followers_url } = this.props.user;
    this.props.dispatch(fetchSelectedUserDetails(url));
    this.props.dispatch(fetchSelectedUserFollowers(followers_url));
    this.props.clickedOnSearchedUser();
    this.props.dispatch(showPopup(true, this.props.user));
  };
  render() {
    const { avatar_url, login } = this.props.user;
    return (
      <div>
        <div className='search-img-link'>
          <div className='search-img'>
            <ProgressiveImage src={avatar_url} placeholder={placeholderSrc}>
              {(src, loading) => (
                <img
                  className={`image${loading ? ' loading' : ' loaded'}`}
                  src={src}
                  alt='avatar'
                  width='auto'
                  height='30'
                />
              )}
            </ProgressiveImage>
          </div>
          <div
            className='search-link'
            onClick={() => this.searchedUserClicked()}
          >
            {login}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;
