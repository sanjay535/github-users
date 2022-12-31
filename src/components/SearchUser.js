import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import placeholderSrc from '../avatar.png';

function SearchUser({avatar, username}) {
  return (
    <div>
      <div className='search-img-link'>
        <div className='search-img'>
        <ProgressiveImage src={avatar} placeholder={placeholderSrc}>
                  {(src, loading) => (
                    <img
                      className={`image${loading ? " loading" : " loaded"}`}
                      src={src}
                      alt="avatar"
                      width="auto"
                      height="30"
                    />
                  )}
          </ProgressiveImage>
        </div>
        <div
          className='search-link'
          onClick={() => this.onFollowerClick(this.props.follower)}
        >
          {username}
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
