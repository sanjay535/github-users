import React from 'react'
import Follower from './Follower';

function FollowersList({followers}) {
  return (
    <div>
        {followers.map((follower) => {
        return (
            <Follower
            follower={follower}
            key={follower.id}
            />
        );
        })}
    </div>
  )
}

export default FollowersList