import React from 'react'
import Repository from './Repository';

function ReposList({user_repos}) {
    // console.log('user_repos=',user_repos)
  return (
    <div>
        {user_repos.map(repo=><Repository key={repo.id} fullname={repo.full_name} url={repo.html_url}/>)}
    </div>
  )
}

export default ReposList